from .forms import *
from graphene_django.forms.mutation import DjangoModelFormMutation
from graphene_django.rest_framework.mutation import SerializerMutation
from graphene import ObjectType


class OrderMutation(SerializerMutation):
    # def perform_mutate(cls, serializer, info):
    #     serializer.user = info.context.user
    #     cls.perform_mutate(serializer, info)

    class Meta:
        serializer_class = OrderSerializer
        model_operations = ('create', 'update', )
        lookup_field = 'id'


class CategoryMutation(DjangoModelFormMutation):
    class Meta:
        form_class = CategoryForm


class MenuItemMutation(DjangoModelFormMutation):
    class Meta:
        form_class = MenuItemForm


class Mutation(ObjectType):
    order_mutation = OrderMutation.Field()
    category_mutation = CategoryMutation.Field()
    menu_item_mutation = MenuItemMutation.Field()
