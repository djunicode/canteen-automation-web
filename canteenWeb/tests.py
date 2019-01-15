from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from .models import Order, User, MenuItem
from .serializers import MenuItemSerializer, OrderItemSerializer, OrderSerializer
from django.urls import reverse
import random
import json


class OrderTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.URL = "orders"

        # Basic user.
        cls.user = User.objects.create(
            username="Student", email="sixty@nine.com", password="super-secret-meow"
        )
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
        client = APIClient()
        # before accepting
        response1 = client.get(reverse("order-detail", kwargs={"pk": self.order.id}))
        # accepting
        response2 = client.get(reverse("order-accept", kwargs={"pk": self.order.id}))
        # after accepting
        response3 = client.get(reverse("order-detail", kwargs={"pk": self.order.id}))
        self.assertEqual(response1.data["status"], "New")
        self.assertEqual(response2.data["message"], "Order accepted")
        self.assertEqual(response3.data["status"], "Preparing")

    def test_order_reject(self):
        # before rejecting
        client = APIClient()
        response1 = client.get(reverse("order-detail", kwargs={"pk": self.order.id}))
        # rejecting
        response2 = client.get(reverse("order-reject", kwargs={"pk": self.order.id}))
        # after rejecting
        response3 = client.get(reverse("order-detail", kwargs={"pk": self.order.id}))
        self.assertEqual(response1.data["status"], "New")
        self.assertEqual(response2.data["message"], "Order rejected")
        self.assertEqual(response3.data["status"], "Rejected by Canteen")

    def tearDown(self):
        Order.objects.all().delete()

    # TODO: Complete tests.
    # Vikrant's note: Order rejection and acceptance has been tested in Postman. Going on a vacation so will complete tests later.
