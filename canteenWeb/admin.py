from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group
from .models import User, Order, MenuItem

admin.site.register(User, UserAdmin, MenuItem)

# Remove groups from admin site.
admin.site.unregister(Group)

# Ordering system
admin.site.register(Order)
