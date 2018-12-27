from django.test import TestCase
from rest_framework.test import APIClient
from .models import Order, User
import random


class OrderTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.URL = "web/orders"

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
        order = Order.objects.create(
            user=self.user, total_price=random.randint(0, 10000)
        )
        order.save()

    def tearDown(self):
        Order.objects.all().delete()

    def test_accept(self):
        # Get list
        response = self.client.get(self.URL)
        print(type(response))
