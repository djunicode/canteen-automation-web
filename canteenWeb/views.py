from django.shortcuts import render, redirect
from rest_framework import viewsets
from django.contrib.auth import login, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.mixins import LoginRequiredMixin
from . import serializers
from . import models

# Create your views here.
class MenuViewSet(LoginRequiredMixin, viewsets.ModelViewSet):
    login_url = 'canteenWeb/login/'
    redirect_field_name = 'login'
    queryset = models.MenuItem.objects.all()
    serializer_class = serializers.MenuSerializer


def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('/menu/login/')
    else:
        form = UserCreationForm()
    return render(request, 'canteenWeb/signup.html', {'form' : form})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('/menu/items/')
    else:
        form = AuthenticationForm()
    return render(request, 'canteenWeb/login.html', {'form' : form})

def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return redirect('/menu/login/')
