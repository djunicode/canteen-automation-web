from django.dispatch import receiver
from django.db.models import signals
from rest_framework.renderers import JSONRenderer
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from .serializers import OrderSerializer
from .models import Order

# Get our channels instance
channel_layer = get_channel_layer()


@receiver(signals.post_save, sender=Order)
def new_orders_websocket(sender, **kwargs):
    # Send all orders. TODO: util.py
    orders = Order.objects.all()
    serialized_orders = OrderSerializer(orders, many=True)
    json_orders = (
        JSONRenderer().render(serialized_orders.data).decode()
    )  # Convert OrderedDicts to Bytes to String
    async_to_sync(channel_layer.group_send)("admin", json_orders)
