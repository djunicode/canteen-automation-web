from rest_framework import serializers

from . import models


class MenuSerializer(serializers.ModelSerializer):
    class Meta:

        model = models.MenuItem
        fields = ("name", "price", "options", "preperation_time", "is_available")
