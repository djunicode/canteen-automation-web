from django.dispatch import receiver
from django.db.models import signals
from rest_framework.renderers import JSONRenderer
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from .serializers import OrderSerializer, BillSerializer
from .models import Order, Bill

# Channel layer
channel_layer = get_channel_layer()


@receiver(signals.post_save, sender=Order)
@receiver(signals.post_delete, sender=Order)
def new_orders_websocket(sender, created=None, **kwargs):
    async_to_sync(channel_layer.group_send)("admin", {"type": "orders.list"})
    object = kwargs.get("instance")
    Bill.objects.get_or_create(
        bill=object,
        tax=int(object.total_price) * 5 / 100,
        total_amount=int(object.total_price) + int(object.total_price) * 5 / 100,
    )
