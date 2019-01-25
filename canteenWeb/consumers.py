from channels.generic.websocket import WebsocketConsumer
from rest_framework.renderers import JSONRenderer
from asgiref.sync import async_to_sync
from .models import Order
from .serializers import OrderSerializer


class CanteenWebConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        async_to_sync(self.channel_layer.group_add)("admin", self.channel_name)
        # Send all orders.
        self.orders_list()

    # Event handler for type orders.list
    def orders_list(self, event=None):
        orders = Order.objects.all()
        serialized_orders = OrderSerializer(orders, many=True)
        json_orders = (
            JSONRenderer().render(serialized_orders.data).decode()
        )  # Convert OrderedDicts to Bytes to String
        self.send(text_data=json_orders)
