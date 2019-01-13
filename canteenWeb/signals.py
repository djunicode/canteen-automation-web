from django.dispatch import receiver
from django.db.models import signals
from rest_framework.renderers import JSONRenderer
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from .serializers import OrderSerializer
from .models import Order

# Channel layer
channel_layer = get_channel_layer()


@receiver(signals.post_save, sender=Order)
def new_orders_websocket(sender, **kwargs):
    async_to_sync(channel_layer.group_send)("admin", {"type": "orders.list"})
