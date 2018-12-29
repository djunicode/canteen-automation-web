from rest_framework import serializers

from . import models


class MenuSerializer(serializers.ModelSerializer):


    class Meta:

        model = models.MenuItem
        fields = ('name', 'price', 'options', 'preperation_time')

    def create(self, validated_data):
        item = models.MenuItem(
            name=validated_data['name'],
            price=validated_data['price'],
            options=validated_data['options'],
            preperation_time=validated_data['preperation_time']
        )
        item.save()
        return item
