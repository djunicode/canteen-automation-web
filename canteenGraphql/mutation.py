from .forms import *
from .types import *
from canteenDb.models import *
from graphene_django.forms.mutation import DjangoModelFormMutation
from graphene_django.rest_framework.mutation import SerializerMutation
import graphene
from graphene import ObjectType, Field, ID


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

class DeleteCategoryMutation(graphene.Mutation):
    ok = graphene.Boolean()
    class Arguments:
        # The input arguments for this mutation
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
      

class Mutation(ObjectType):
    order_mutation = OrderMutation.Field()
    category_mutation = CategoryMutation.Field()
    menu_item_mutation = MenuItemMutation.Field()
    delete_category_mutation = DeleteCategoryMutation.Field()
    delete_menu_item_mutation = DeleteMenuItemMutation.Field()
    delete_order_mutation = DeleteOrderMutation.Field()
