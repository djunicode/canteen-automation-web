from rest_framework import serializers
from canteenWeb.models import User


class UserIDSerializer(serializers.Serializer):
    userID = serializers.CharField(max_length=20)

    def create(self, validated_data):
        return User.objects.filter(username=validated_data.get("userID"))[0]
