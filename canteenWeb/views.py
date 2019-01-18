from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from django.http import Http404
from rest_framework import viewsets, permissions, status, views
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from drf_yasg.utils import no_body, swagger_auto_schema
from drf_yasg import openapi
from . import choices
from .models import Order, MenuItem, User, Bill, Category
from .serializers import (
    OrderSerializer,
    MenuItemSerializer,
    SignUpSerializer,
    LoginSerializer,
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

    @swagger_auto_schema(request_body=no_body, responses={200: None})
    @action(detail=True, methods=["put"])
    def accept(self, request, pk=None):
        """
            Accept an order by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Preparing"]
        order.save()
        return Response({"message": "Order accepted"})

    @swagger_auto_schema(request_body=no_body, responses={200: None})
    @action(detail=True, methods=["put"])
    def reject(self, request, pk=None):
        """
            Reject an order by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Rejected by Canteen"]
        order.save()
        return Response({"message": "Order rejected"})

    @swagger_auto_schema(request_body=no_body, responses={200: None})
    @action(detail=True, methods=["put"])
    def fulfil(self, request, pk=None):
        """
            Fulfil an order by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.is_fulfilled = True
        order.save()
        return Response({"message": "Order fulfilled"})

    @swagger_auto_schema(request_body=no_body, responses={200: None})
    @action(detail=True, methods=["put"])
    def unfulfil(self, request, pk=None):
        """
            Set order fulfil to false by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.is_fulfilled = False
        order.save()
        return Response({"message": "Order unfulfilled"})

    @swagger_auto_schema(responses={200: OrderSerializer(many=True)})
    @action(detail=False)
    def completed(self, request):
        """
            Return a list of all completed orders.
        """
        completed_orders = Order.objects.filter(is_fulfilled=True)
        serializer = self.get_serializer(completed_orders, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(responses={200: OrderSerializer(many=True)})
    @action(detail=False)
    def pending(self, request):
        """
            Return a list of all pending orders.
        """
        pending_orders = Order.objects.filter(
            is_fulfilled=False, status__gte=0
        )  # Should not be fulfilled and status should be positive.
        serializer = self.get_serializer(pending_orders, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(responses={200: None})
    @action(detail=False)
    def status_options(self, request):
        """
            Show all possible preparation status options for an order.
        """
        return Response(choices.STATUS_DICTIONARY)

    @action(detail=True, methods=["get", "post"])
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
            return HttpResponseRedirect(redirect_to="/menu_item/")
        else:
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


class Logout(APIView):
    def post(self, request):
        logout(request)
        return HttpResponseRedirect(redirect_to="/login/")
