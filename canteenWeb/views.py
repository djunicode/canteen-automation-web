from django.shortcuts import render, redirect
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from django.contrib.auth import login, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.mixins import LoginRequiredMixin
from . import serializers
from . import models
from . import choices
from .models import Order
from .serializers import OrderSerializer


# FIXME: Change to ModelViewSet and add CRUD operations, with OrderItem support.
class OrderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    # TODO: Add permissions.

    @action(detail=True, methods=["get", "post"])  # TODO: Remove get
    def accept(self, request, pk=None):
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Preparing"]
        order.save()
        return Response({"message": "Order accepted"})

    @action(detail=True, methods=["get", "post"])  # TODO: Remove get
    def reject(self, request, pk=None):
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Rejected by Canteen"]
        order.save()
        return Response({"message": "Order rejected"})


class ListMenu(ListAPIView):
    queryset = models.MenuItem.objects.all()
    serializer_class = serializers.MenuSerializer


class CreateMenu(LoginRequiredMixin, CreateAPIView):
    login_url = "/menu/login/"
    redirect_field_name = "login"
    queryset = models.MenuItem.objects.all()
    serializer_class = serializers.MenuSerializer


class ModifyMenu(LoginRequiredMixin, RetrieveUpdateDestroyAPIView):
    login_url = "/menu/login/"
    redirect_field_name = "login"
    queryset = models.MenuItem.objects.all()
    serializer_class = serializers.MenuSerializer


def signup(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect("/menu/login/")
    else:
        form = UserCreationForm()
    return render(request, "canteenWeb/signup.html", {"form": form})


def login_view(request):
    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect("/menu/")
    else:
        form = AuthenticationForm()
    return render(request, "canteenWeb/login.html", {"form": form})


def logout_view(request):
    if request.method == "POST":
        logout(request)
        return redirect("/menu/login/")
