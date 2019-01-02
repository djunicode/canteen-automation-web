from django.shortcuts import render
from rest_framework import viewsets, permissions, status, views
from rest_framework.response import Response
from rest_framework.decorators import action
from django.http import Http404
from . import choices
from .models import MenuItem, Order
from .serializers import MenuItemSerializer, OrderSerializer

# Create your views here.
class MenuItemList(views.APIView):
    def get(self, request):
        menu_item = MenuItem.objects.all()
        serializer = MenuItemSerializer(menu_item, many=True)
        return Response(serializer.data)


class AddMenuItem(views.APIView):
    def post(self, request):
        serializer = MenuItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MenuItemDetails(views.APIView):
    def get_object(self, id):
        try:
            return MenuItem.objects.get(id=id)
        except MenuItem.DoesNotExist:
            raise Http404

    def get(self, request, *args, **kwargs):
        menu_item_id = kwargs["menu_item_id"]
        menu_item = self.get_object(id=menu_item_id)
        serializer = MenuItemSerializer(menu_item)
        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        menu_item_id = kwargs["menu_item_id"]
        menu_item = self.get_object(id=menu_item_id)
        serializer = MenuItemSerializer(menu_item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
