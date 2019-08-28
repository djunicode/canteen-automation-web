from graphene import Field, List, ObjectType, Int, Boolean
from .types import *


class Query(ObjectType):
    orders = List(OrderType, is_fulfilled=Boolean(required=False))
    order_by_id = Field(OrderType, id=Int())

    bills = List(BillType)
    bill_by_id = Field(BillType, id=Int())

    categories = List(CategoryType)
    category_by_id = Field(CategoryType, id=Int())

    menu = List(MenuItemType)

    def resolve_orders(self, info, is_fulfilled=None):
        if is_fulfilled:
            return Order.objects.filter(is_fulfilled=is_fulfilled)
        else:
            return Order.objects.all()

    def resolve_order_by_id(self, info, id):
        return Order.objects.get(id=id)

    def resolve_bills(self, info):
        return Bill.objects.all()

    def resolve_bill_by_id(self, info, id):
        return Bill.objects.get(id=id)

    def resolve_categories(self, info):
        return Category.objects.all()

    def resolve_category_by_id(self, info, id):
        return Category.objects.get(id=id)

    def resolve_menu(self, info):
        return MenuItem.objects.all()
