from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from django.http import Http404
from django.http import JsonResponse
from rest_framework import viewsets, permissions, status, views
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from drf_yasg.utils import no_body, swagger_auto_schema
from drf_yasg import openapi

from canteenWeb.models import (
    Order,
    MenuItem,
    User,
    StudentProfile,
    TeacherProfile,
    Bill,
    Category,
    Ingredients,
)
from .serializers import UserIDSerializer
from canteenWeb.serializers import OrderSerializer


class UserOrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    @swagger_auto_schema(responses={200: OrderSerializer(many=True)})
    @action(detail=False, methods=["get"])
    def completed(self, request):
        """
            Return a list of all completed orders for a user.
        """
        serializer = UserIDSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            completed_orders = Order.objects.filter(is_fulfilled=True, user=user)
            serializer = self.get_serializer(completed_orders, many=True)
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(responses={200: OrderSerializer(many=True)})
    @action(detail=False, methods=["post"])
    def pending(self, request):
        """
            Return a list of all pending orders for a user.
        """
        serializer = UserIDSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            pending_orders = Order.objects.filter(
                is_fulfilled=False, status__gte=0, user=user
            )  # Should not be fulfilled and status should be positive.
            serializer = self.get_serializer(pending_orders, many=True)
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
