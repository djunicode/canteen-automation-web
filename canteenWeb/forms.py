from django.contrib.auth.forms import (
    UserCreationForm as BaseUserCreationForm,
    BaseUserChangeForm,
)
from .models import User

# Our custom user model.
class UserCreationForm(BaseUserCreationForm):
    class Meta(BaseUserCreationForm.Meta):
        model = User
        fields = BaseUserCreationForm.Meta.fields + (
            "phone_number",
            "is_banned",
            "is_student",
            "is_teacher",
            "device_id",
        )


class UserUpdateForm(BaseUserChangeForm):
    class Meta:
        model = User
        fields = BaseUserChangeForm.Meta.fields + (
            "phone_number",
            "is_banned",
            "is_student",
            "is_teacher",
            "device_id",
        )
