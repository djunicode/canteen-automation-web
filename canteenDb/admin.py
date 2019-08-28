from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group
from django.contrib.auth.forms import UserChangeForm
from .models import User, Category, MenuItem, Order, Bill


# Our custom user model.
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

admin.site.register(Order)
admin.site.register(Category)
admin.site.register(MenuItem)
admin.site.register(Bill)
