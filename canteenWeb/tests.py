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
        # User
        cls.user = User.objects.create(
            username="Student", email="sixty@nine.com", password="super-secret-meow"
        )
        cls.user.save()
        # Client.
        cls.client = APIClient()
        cls.client.force_authenticate(user=cls.user)

    def setUp(self):
        # Create an order before all tests.
        self.order = Order.objects.create(user=self.user, payment_choices="COD")

    def test_order_accept(self):
        before = self.client.get(
            "/orders/{}/".format(self.order.id)
        )  # before accepting
        accept = self.client.put(
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
        reject = self.client.put(
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
