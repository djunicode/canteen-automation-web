from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from . import choices
from .models import Order
from .serializers import OrderSerializer


# FIXME: Change to ModelViewSet and add CRUD operations, with OrderItem support.
class OrderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    # TODO: Add permissions.

    @action(detail=True, methods=["get", "post"])  # TODO: Remove get
    def accept(self, request, pk=None):
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Preparing"]
        order.save()
        return Response({"message": "Order accepted"})

    @action(detail=True, methods=["get", "post"])  # TODO: Remove get
    def reject(self, request, pk=None):
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Rejected by Canteen"]
        order.save()
        return Response({"message": "Order rejected"})

    @action(detail=False)
    def completed(self, request):
        completed_orders = Order.objects.filter(is_fulfilled=True)
        serializer = self.get_serializer(completed_orders, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def pending(self, request):
        pending_orders = Order.objects.filter(
            is_fulfilled=False, status__gte=0
        )  # Should not be fulfilled and status should be positive.
        serializer = self.get_serializer(pending_orders, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def status_options(self, request):
        return Response(choices.STATUS_DICTIONARY)

    @action(detail=True, methods=["get", "post"])
    def change_status(self, request, pk=None):
        order = self.get_object()
        data = request.data
        if "status" in data:
            order.status = int(data["status"])
            order.save()
            return Response(
                {
                    "message": "Order status changed",
                    "status": choices.STATUS_DICTIONARY_REVERSE[order.status],
                }
            )
        else:
            return Response(
                {"error": "Status not recognised"}, status.HTTP_400_BAD_REQUEST
            )
