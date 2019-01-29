from django.dispatch import receiver
from django.db.models import signals
from rest_framework.renderers import JSONRenderer
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from .serializers import OrderSerializer, BillSerializer
from .models import Order, Bill
from django.dispatch import Signal

# Channel layer
channel_layer = get_channel_layer()


@receiver(signals.post_save, sender=Order)
@receiver(signals.post_delete, sender=Order)
def new_orders_websocket(sender, instance=None, created=None, **kwargs):
    async_to_sync(channel_layer.group_send)("admin", {"type": "orders.list"})

    if created:
        items = list(instance.items.all())
        total_amount = sum(map(lambda i: i.menu_item.price, items))
        Bill.objects.create(order=instance, total_amount=total_amount)
