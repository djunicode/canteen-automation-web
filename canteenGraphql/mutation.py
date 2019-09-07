from .forms import *
from .types import *
from canteenDb.models import *

import graphene
from graphene_django.forms.mutation import DjangoModelFormMutation
from graphene_django.rest_framework.mutation import SerializerMutation
from graphene import ObjectType, ID


class OrderMutation(SerializerMutation):
    @classmethod
    def perform_mutate(cls, serializer, info):
        if not info.context.user.is_authenticated:
            raise Exception("User not authenticated! " + info.context.user.__str__())
        obj = serializer.save(user=info.context.user)
        return obj

    class Meta:
        serializer_class = OrderSerializer
        model_operations = ('create', )
        lookup_field = 'id'


class CategoryMutation(DjangoModelFormMutation):
    class Meta:
        form_class = CategoryForm


class MenuItemMutation(DjangoModelFormMutation):
    class Meta:
        form_class = MenuItemForm


class FulfillMutation(graphene.Mutation):
    ok = graphene.Boolean()
    class Arguments:
        id = ID()

    @classmethod
    def mutate(cls, root, info, **args):
        obj = Order.objects.get(pk=args["id"])
        obj.is_fulfilled = True
        obj.save()
        return cls(ok=True)


class DeleteCategoryMutation(graphene.Mutation):
    ok = graphene.Boolean()
    class Arguments:
        id = ID()

    @classmethod
    def mutate(cls, root, info, **args):
        obj = Category.objects.get(pk=args["id"])
        obj.delete() 
        return cls(ok=True)


class DeleteMenuItemMutation(graphene.Mutation):
    ok = graphene.Boolean()
    class Arguments:
        # The input arguments for this mutation
        id = ID()

    @classmethod
    def mutate(cls, root, info, **args):
        obj = MenuItem.objects.get(pk=args["id"])
        obj.delete()
        return cls(ok=True)

      
class DeleteOrderMutation(graphene.Mutation):
    ok = graphene.Boolean()
    class Arguments:
        # The input arguments for this mutation
        id = ID()

    @classmethod
    def mutate(cls, root, info, **args):
        obj = Order.objects.get(pk=args["id"])
        obj.delete()
        return cls(ok=True)


# Update Menu item
class MenuItemInput(graphene.InputObjectType):
    id = graphene.ID()
    name = graphene.String()
    price = graphene.Int()
    is_available = graphene.Boolean()
    preparation_time = graphene.types.datetime.Time()
    category = graphene.ID()

class UpdateMenuItem(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)
        input = MenuItemInput(required=True)

    ok = graphene.Boolean()
    menu_item = graphene.Field(MenuItemType)

    @staticmethod
    def mutate(root, info, id, input=None):
        ok = False
        menu_item_instance = MenuItem.objects.get(pk=id)
        if menu_item_instance:
            ok = True
            if input.name:
                menu_item_instance.name = input.name
                menu_item_instance.save()
            if input.price:
                menu_item_instance.price = input.price
                menu_item_instance.save()
            if input.is_available != menu_item_instance.is_available:
                menu_item_instance.is_available = input.is_available
                menu_item_instance.save()
            if input.preparation_time:
                menu_item_instance.preparation_time = input.preparation_time
                menu_item_instance.save()
            if input.category:
                menu_item_instance.category = input.category
                menu_item_instance.save()
            return UpdateMenuItem(ok=ok, menu_item=menu_item_instance)
        return UpdateMenuItem(ok=ok, menu_item=None)


class Mutation(ObjectType):
    order_mutation = OrderMutation.Field()
    category_mutation = CategoryMutation.Field()
    menu_item_mutation = MenuItemMutation.Field()
    delete_category_mutation = DeleteCategoryMutation.Field()
    delete_menu_item_mutation = DeleteMenuItemMutation.Field()
    delete_order_mutation = DeleteOrderMutation.Field()
    fulfill_order_mutation = FulfillMutation.Field()
    update_menu_item = UpdateMenuItem.Field()
