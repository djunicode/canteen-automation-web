from rest_framework import serializers
from .models import Order, OrderItem, MenuItem

###################
# ORDERING SYSTEM #
###################


class OrderItemSerializer(serializers.ModelSerializer):
    menu_item = serializers.SlugRelatedField(
        slug_field="name", queryset=MenuItem.objects.all()
    )

    class Meta:
        model = OrderItem
        fields = "__all__"


class OrderSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    status = serializers.IntegerField(read_only=True)

    time_issued = serializers.DateTimeField(read_only=True)
    time_sheduled = serializers.DateTimeField(read_only=True)
    time_prepared = serializers.DateTimeField(read_only=True)
    time_delivered = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Order
        fields = (
            "url",
            "id",
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
        )

    def create(self, validated_data):
        items = validated_data.pop("items")
        order = Order.objects.create(**validated_data)
        for item_data in items:
            OrderItem.objects.create(order=order, **item_data)
        return order

    def update(self, instance, validated_data):
        # TODO: COMPLETE
        return instance
