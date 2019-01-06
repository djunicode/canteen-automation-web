from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from rest_framework import viewsets, status, filters
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.views import APIView
from . import choices
from .models import Order, MenuItem, User
from .serializers import (
    OrderSerializer,
    MenuSerializer,
    SignUpSerializer,
    LoginSerializer,
)

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


class ListMenu(ListAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ("name",)


class CreateMenu(CreateAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuSerializer


class ModifyMenu(RetrieveUpdateDestroyAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuSerializer


class SignUp(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignUpSerializer


class Login(APIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(
                username=serializer.data.get("username"),
                password=serializer.data.get("password"),
            )
            login(request, user)
            return HttpResponseRedirect(redirect_to="/list/")
        else:
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


class Logout(APIView):
    def post(self, request):
        logout(request)
        return HttpResponseRedirect(redirect_to="/login/")
