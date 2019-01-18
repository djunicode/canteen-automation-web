from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient, APIRequestFactory
from rest_framework.request import Request
from .models import Order, User, MenuItem
from .serializers import MenuItemSerializer, OrderItemSerializer, OrderSerializer
from django.urls import reverse
import random
import json


factory = APIRequestFactory()
request = factory.get("/")

serializer_context = {"request": Request(request)}


class OrderTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        # User
        cls.user = User.objects.create(
            username="Student", email="sixty@nine.com", password="super-secret-meow"
        )
        cls.user.is_staff = True
        cls.user.save()

        # Client.
        cls.client = APIClient()
        cls.client.force_authenticate(user=cls.user)

    def setUp(self):
        # Create an order before all tests.
        self.order = Order.objects.create(
            user=self.user, total_price=random.randint(0, 10000), payment_choices="COD"
        )

    def test_order_accept(self):
        before = self.client.get(
            "/orders/{}/".format(self.order.id)
        )  # before accepting
        accept = self.client.post(
            "/orders/{}/accept/".format(self.order.id)
        )  # accepting
        after = self.client.get("/orders/{}/".format(self.order.id))  # after accepting
        # Assertions
        self.assertEqual(before.status_code, 200)
        self.assertEqual(before.data["status"], "New")

        self.assertEqual(accept.status_code, 200)

        self.assertEqual(after.status_code, 200)
        self.assertEqual(after.data["status"], "Preparing")

    def test_order_reject(self):
        before = self.client.get(
            "/orders/{}/".format(self.order.id)
        )  # before accepting
        reject = self.client.post(
            "/orders/{}/reject/".format(self.order.id)
        )  # rejecting
        after = self.client.get("/orders/{}/".format(self.order.id))  # after rejecting
        # Assertions
        self.assertEqual(before.status_code, 200)
        self.assertEqual(before.data["status"], "New")

        self.assertEqual(reject.status_code, 200)

        self.assertEqual(after.status_code, 200)
        self.assertEqual(after.data["status"], "Rejected by Canteen")

    def tearDown(self):
        Order.objects.all().delete()

    # TODO: Complete tests.
    # Vikrant's note: Order rejection and acceptance has been tested in Postman. Going on a vacation so will complete tests later.


class MenuTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.URL = "menu_item"

        # Basic user.
        cls.user = User.objects.create(
            username="Student1", email="sixtynine@one.com", password="super-secret-meow"
        )
        cls.user.is_staff = True
        cls.user.save()

        # Client.
        cls.client = APIClient()
        cls.client.force_authenticate(user=cls.user)

    def setUp(self):
        # Create an menu before all tests.
        self.sandwich = MenuItem.objects.create(
            name="Sandwich",
            price=random.randint(0, 100),
            is_available=True,
            options="JAIN",
        )
        self.dosa = MenuItem.objects.create(
            name="Dosa",
            price=random.randint(0, 100),
            is_available=True,
            options="NON JAIN",
        )
        self.fried_rice = MenuItem.objects.create(
            name="Fried Rice",
            price=random.randint(0, 100),
            is_available=False,
            options="BOTH",
        )
        self.coffee = MenuItem.objects.create(
            name="Coffee",
            price=random.randint(0, 100),
            is_available=False,
            options="JAIN",
        )
        self.valid_menu_item = {
            "name": "Pizza",
            "price": 140,
            "is_available": "False",
            "options": "NON JAIN",
        }
        self.invalid_menu_item = {
            "name": "",
            "price": 60,
            "is_available": "False",
            "options": "NON JAIN",
        }
        self.valid_update_menu_item = {
            "name": "Burger",
            "price": 90,
            "is_available": "False",
            "options": "JAIN",
        }
        self.invalid_update_menu_item = {
            "name": "",
            "price": 70,
            "is_available": "True",
            "options": "NON JAIN",
        }

    def test_get_all_menu_items(self):
        # get API response
        response = self.client.get(reverse("menuitem-list"))
        # get data from db
        menu_item_list = MenuItem.objects.all()
        serializer = MenuItemSerializer(
            menu_item_list, context=serializer_context, many=True
        )
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_valid_menu_item(self):
        response = self.client.get(
            reverse("menuitem-detail", kwargs={"pk": self.sandwich.id})
        )
        menu_item = MenuItem.objects.get(id=self.sandwich.id)
        serializer = MenuItemSerializer(menu_item, context=serializer_context)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_invalid_menu_item(self):
        response = self.client.get(reverse("menuitem-detail", kwargs={"pk": 7}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_create_valid_menu_item(self):
        response = self.client.post(
            reverse("menuitem-list"),
            data=json.dumps(self.valid_menu_item),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_invalid_menu_item(self):
        response = self.client.post(
            reverse("menuitem-list"),
            data=json.dumps(self.invalid_menu_item),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_valid_update_menu_item(self):
        response = self.client.put(
            reverse("menuitem-detail", kwargs={"pk": self.sandwich.id}),
            data=json.dumps(self.valid_update_menu_item),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_invalid_update_menu_item(self):
        response = self.client.put(
            reverse("menuitem-detail", kwargs={"pk": self.sandwich.id}),
            data=json.dumps(self.invalid_update_menu_item),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def tearDown(self):
        MenuItem.objects.all().delete()
