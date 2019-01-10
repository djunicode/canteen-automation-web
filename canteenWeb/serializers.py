from rest_framework import serializers
from .models import Order, OrderItem, MenuItem
from . import choices

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
    status = serializers.CharField(read_only=True, source="get_status_display")

    time_issued = serializers.DateTimeField(read_only=True)
    time_sheduled = serializers.DateTimeField(read_only=True)
    time_prepared = serializers.DateTimeField(read_only=True)
    time_delivered = serializers.DateTimeField(read_only=True)

    items = OrderItemSerializer(many=True)

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
            "items",
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


#####################
# CUSTOMIZABLE MENU #
#####################


class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = (
            "id",
            "name",
            "price",
            "is_available",
            "preparation_time",
            "options",
            "category",
        )

        def create(self, validate_data):
            menu_item = MenuItem.objects.create(title=validated_data["name"])
            return menu_item

        """def update (self,instance,validated_data):
            instance.name = validate_data['name']
            instance.save()
            return instance"""
