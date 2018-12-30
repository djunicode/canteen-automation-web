from rest_framework import serializers

from . import models


class MenuSerializer(serializers.ModelSerializer):
    class Meta:

        model = models.MenuItem
        fields = ("name", "price", "options", "preperation_time", "is_available")

    def create(self, validated_data):
        item = models.MenuItem(
            name=validated_data["name"],
            price=validated_data["price"],
            options=validated_data["options"],
            preperation_time=validated_data["preperation_time"],
            is_available=validated_data["is_available"],
        )
        item.save()
        return item

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.price = validated_data.get("price", instance.price)
        instance.options = validated_data.get("options", instance.options)
        instance.preperation_time = validated_data.get(
            "preperation_time", instance.preperation_time
        )
        instance.is_available = validated_data.get(
            "is_available", instance.is_available
        )
        instance.save()
        return instance
