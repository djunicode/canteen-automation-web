from django.shortcuts import render
from rest_framework import viewsets
from .models import Order
from . import serializers


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = serializers.OrderSerializer
