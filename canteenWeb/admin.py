from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group
from .models import User, MenuItem, Order


# Our custom user model.
class UserAdmin(admin.ModelAdmin):
    model = User
    filter_horizontal = ("user_permissions", "groups")


admin.site.register(User, UserAdmin)

# Remove groups from admin site.
admin.site.unregister(Group)

# Our menu item model
admin.site.register(MenuItem)

# Ordering system
admin.site.register(Order)
