from rest_framework import serializers
from canteenDb.models import (
    Order,
    OrderItem,
    MenuItem,
    User,
    Bill,
    Category,
)

###################
# ORDERING SYSTEM #
###################


class OrderItemSerializer(serializers.ModelSerializer):
    menu_item = serializers.SlugRelatedField(
        slug_field="name", queryset=MenuItem.objects.all()
    )

    class Meta:
        model = OrderItem
        exclude = ("order",)


class OrderSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    time_sheduled = serializers.DateTimeField(required=False)

    status = serializers.CharField(read_only=True, source="get_status_display")
    time_issued = serializers.DateTimeField(read_only=True)
    time_prepared = serializers.DateTimeField(read_only=True)
    time_delivered = serializers.DateTimeField(read_only=True)

    items = OrderItemSerializer(many=True, required=False, allow_null=True)

    class Meta:
        model = Order
        fields = (
            # "url",
            "id",
            "user",
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

    def create(self, validated_data):
        items = []
        if "items" in validated_data:
            items = validated_data.pop("items")
        order = Order.objects.create(**validated_data)
        for item_data in items:
            OrderItem.objects.create(order=order, **item_data)
        return order


#####################
# CUSTOMIZABLE MENU #
#####################


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class MenuItemSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())

    class Meta:
        model = MenuItem
        fields = "__all__"


##################
# BILLING SYSTEM #
##################


class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = "__all__"
