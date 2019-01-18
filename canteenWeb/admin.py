from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group
from django.contrib.auth.forms import UserChangeForm
from .models import User, MenuItem, Order


class UserChangeForm(UserChangeForm):
    class Meta(UserChangeForm.Meta):
        model = User


class UserAdmin(UserAdmin):
    form = UserChangeForm

    fieldsets = UserAdmin.fieldsets + (
        (
            None,
            {
                "fields": (
                    "phone_number",
                    "is_banned",
                    "is_student",
                    "is_teacher",
                    "device_id",
                )
            },
        ),
    )


admin.site.register(User, UserAdmin)

# Remove groups from admin site.
admin.site.unregister(Group)

# Our menu item model
admin.site.register(MenuItem)

# Ordering system
admin.site.register(Order)
