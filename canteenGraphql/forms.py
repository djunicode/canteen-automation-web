from django import forms
from rest_framework import serializers
from canteenDb.models import *


class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        exclude = ('id', 'order', )


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemsSerializer(many=True)

    class Meta:
        model = Order
        fields = '__all__'

    def create(self, validated_data):
        items = validated_data.pop('items')
        new_order = Order.objects.create(**validated_data)
        for item_data in items:
            OrderItem.objects.create(order=new_order, **item_data)
        return new_order


class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = '__all__'


class MenuItemForm(forms.ModelForm):
    class Meta:
        model = MenuItem
        fields = '__all__'
