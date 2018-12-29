from django.shortcuts import render
from rest_framework import viewsets
from . import serializers
from . import models

# Create your views here.
class ItemViewSet(viewsets.ModelViewSet):

    serializer_class = serializers.MenuSerializer
    queryset = models.MenuItem.objects.all()
