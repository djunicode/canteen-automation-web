from rest_framework import serializers
from . import models


class OrderItemSerializer(serializers.ModelSerializer):
    menu_item = serializers.SlugRelatedField(
        slug_field="name", queryset=models.MenuItem.objects.all()
    )

    class Meta:
        model = models.OrderItem
        fields = "__all__"


class OrderSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    items = OrderItemSerializer(many=True)

    class Meta:
        model = models.Order
        fields = (
            "user",
            "total_price",
            "is_fulfilled",
            "payment_choices",
            "status",
            "transaction_id",
            "time_issued",
            "time_sheduled",
            "time_prepared",
            "time_delivered",
            "items",
        )
