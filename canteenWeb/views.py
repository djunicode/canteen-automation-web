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
