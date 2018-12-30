from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from . import serializers
from . import models

# Create your views here.
class MenuViewSet(viewsets.ModelViewSet):

    queryset = models.MenuItem.objects.all()
    serializer_class = serializers.MenuSerializer
