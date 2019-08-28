from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from canteenDb import choices

from canteenDb.models import (
    Order,
    MenuItem,
    Bill,
    Category,
)

from .serializers import (
    OrderSerializer,
    MenuItemSerializer,
    BillSerializer,
    CategorySerializer,
)


class MenuViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer


class BillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = (permissions.IsAuthenticated,)

    @action(detail=True, methods=["put"], permission_classes=[permissions.IsAdminUser])
    def accept(self, request, pk=None):
        """
            Accept an order by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Preparing"]
        order.save()
        return Response({"message": "Order accepted"})

    @action(detail=True, methods=["put"], permission_classes=[permissions.IsAdminUser])
    def reject(self, request, pk=None):
        """
            Reject an order by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Rejected by Canteen"]
        order.save()
        return Response({"message": "Order rejected"})

    @action(detail=True, methods=["put"], permission_classes=[permissions.IsAdminUser])
    def fulfil(self, request, pk=None):
        """
            Fulfil an order by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.is_fulfilled = True
        order.save()
        return Response({"message": "Order fulfilled"})

    @action(detail=True, methods=["put"], permission_classes=[permissions.IsAdminUser])
    def unfulfil(self, request, pk=None):
        """
            Set order fulfil to false by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.is_fulfilled = False
        order.save()
        return Response({"message": "Order unfulfilled"})

    @action(detail=False, permission_classes=[permissions.IsAdminUser])
    def completed(self, request):
        """
            Return a list of all completed orders.
        """
        completed_orders = Order.objects.filter(is_fulfilled=True)
        serializer = self.get_serializer(completed_orders, many=True)
        return Response(serializer.data)

    @action(detail=False, permission_classes=[permissions.IsAdminUser])
    def pending(self, request):
        """
            Return a list of all pending orders.
        """
        pending_orders = Order.objects.filter(
            is_fulfilled=False, status__gte=0
        )  # Should not be fulfilled and status should be positive.
        serializer = self.get_serializer(pending_orders, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def status_options(self, request):
        """
            Show all possible preparation status options for an order.
        """
        return Response(choices.STATUS_DICTIONARY)

    @action(
        detail=True,
        methods=["get", "post"],
        permission_classes=[permissions.IsAdminUser],
    )
    def change_status(self, request, pk=None):
        """
            Change the preparation status of an order.
        """
        order = self.get_object()
        data = request.data
        if "status" in data:
            if int(data["status"]) in choices.STATUS_DICTIONARY_REVERSE:
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
                    {"error": "Status not recognised", "status": data["status"]},
                    status.HTTP_400_BAD_REQUEST,
                )
        else:
            return Response(
                {"error": "Missing status in request body"}, status.HTTP_400_BAD_REQUEST
            )
