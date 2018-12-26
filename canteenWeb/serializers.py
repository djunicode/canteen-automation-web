from rest_framework import serializers
from .models import *


class OrderSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Order
        fields = "__all__"


class OrderItemSerializer(serializers.ModelSerializer):
    menu_item = serializers.SlugRelatedField(slug_field="name")

    class Meta:
        model = OrderItem
        fields = "__all__"
