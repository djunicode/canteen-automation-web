from graphene_django import DjangoObjectType
from canteenDb.models import Order, OrderItem, Category, Bill, MenuItem


class OrderItemType(DjangoObjectType):
    class Meta:
        model = OrderItem


class OrderType(DjangoObjectType):
    class Meta:
        model = Order


class CategoryType(DjangoObjectType):
    class Meta:
        model = Category


class BillType(DjangoObjectType):
    class Meta:
        model = Bill


class MenuItemType(DjangoObjectType):
    class Meta:
        model = MenuItem
