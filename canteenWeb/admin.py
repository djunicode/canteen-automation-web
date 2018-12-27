from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group
from .models import User
from django.contrib.auth.forms import UserCreationForm

# Our custom user model.
class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User
        fields = UserCreationForm.Meta.fields + (
            "phone_number",
            "is_banned",
            "is_student",
            "is_teacher",
            "device_id",
        )


admin.site.register(User, UserAdmin)

# Remove groups from admin site.
admin.site.unregister(Group)
