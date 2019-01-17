from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from rest_framework import viewsets, permissions, status, views
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from django.http import Http404
from . import choices
from .models import Order, MenuItem, User
from .serializers import (
    OrderSerializer,
    MenuItemSerializer,
    SignUpSerializer,
    LoginSerializer,
)


class IsAdminUserOrReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        return (request.method in permissions.SAFE_METHODS or
                request.user and
                request.user.is_staff)


# Create your views here.


class MenuViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer
    permission_classes = (IsAdminUserOrReadOnly,)


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = (permissions.IsAuthenticated,)

    # TODO: Add permissions.

    @action(detail=True, methods=["get", "post"], permission_classes=[permissions.IsAdminUser])  # TODO: Remove get
    def accept(self, request, pk=None):
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Preparing"]
        order.save()
        return Response({"message": "Order accepted"})

    @action(detail=True, methods=["get", "post"], permission_classes=[permissions.IsAdminUser])  # TODO: Remove get
    def reject(self, request, pk=None):
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Rejected by Canteen"]
        order.save()
        return Response({"message": "Order rejected"})

    @action(detail=False, permission_classes=[permissions.IsAdminUser])
    def completed(self, request):
        completed_orders = Order.objects.filter(is_fulfilled=True)
        serializer = self.get_serializer(completed_orders, many=True)
        return Response(serializer.data)

    @action(detail=False, permission_classes=[permissions.IsAdminUser])
    def pending(self, request):
        pending_orders = Order.objects.filter(
            is_fulfilled=False, status__gte=0
        )  # Should not be fulfilled and status should be positive.
        serializer = self.get_serializer(pending_orders, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def status_options(self, request):
        return Response(choices.STATUS_DICTIONARY)

    @action(detail=True, methods=["get", "post"], permission_classes=[permissions.IsAdminUser])
    def change_status(self, request, pk=None):
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
            return HttpResponseRedirect(
                redirect_to="/menu_item/", status=status.HTTP_200_OK
            )
        else:
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


class Logout(APIView):
    def post(self, request):
        logout(request)
        return HttpResponseRedirect(redirect_to="/login/", status=status.HTTP_200_OK)
