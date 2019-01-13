from channels.generic.websocket import WebsocketConsumer
from .models import Order
from .serializers import OrderSerializer
from rest_framework.renderers import JSONRenderer


class CanteenWebConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        # Send all orders.
        orders = Order.objects.all()
        serialized_orders = OrderSerializer(orders, many=True)
        json_orders = (
            JSONRenderer().render(serialized_orders.data).decode()
        )  # Convert OrderedDicts to Bytes to String
        self.send(text_data=json_orders)
