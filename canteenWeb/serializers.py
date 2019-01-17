from rest_framework import serializers
from .models import Order, OrderItem, MenuItem, User, Bill, Category
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
        exclude = ("order",)


class OrderSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    status = serializers.CharField(read_only=True, source="get_status_display")

    time_issued = serializers.DateTimeField(read_only=True)
    time_sheduled = serializers.DateTimeField(read_only=True)
    time_prepared = serializers.DateTimeField(read_only=True)
    time_delivered = serializers.DateTimeField(read_only=True)

    items = OrderItemSerializer(many=True, required=False, allow_null=True)

    class Meta:
        model = Order
        # Need to include items serializer.
        fields = (
            # "url",
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
        items = []
        if "items" in validated_data:
            items = validated_data.pop("items")
        order = Order.objects.create(**validated_data)
        for item_data in items:
            OrderItem.objects.create(order=order, **item_data)
        return order

    # def update(self, instance, validated_data):
    #     # TODO: COMPLETE
    #     return instance


#####################
# CUSTOMIZABLE MENU #
#####################


class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = (
            "url",
            "id",
            "name",
            "price",
            "is_available",
            "preparation_time",
            "options",
        )


class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "first_name",
            "last_name",
            "email",
            "is_staff",
            "username",
            "password",
        )
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User(
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            email=validated_data["email"],
            is_staff=validated_data["is_staff"],
            username=validated_data["username"],
        )
        user.set_password(validated_data["password"])
        user.save()
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=10)
    password = serializers.CharField(style={"input_type": "password"})


class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
