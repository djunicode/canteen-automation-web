from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group
from .models import User
from django import forms

# Our custom user model.
class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('__all__')

class UserUpdateForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('phone_number', 'is_banned', 'is_student', 'is_teacher', 'device_id')

class UserAdmin(BaseUserAdmin):
    form = UserForm
    add_form = UserUpdateForm

    add_fieldsets = (
    (None,{
    'classes': ('wide',),
    'fields': ('phone_number', 'is_banned', 'is_student', 'is_teacher', 'device_id')
    }
    ),
    )




admin.site.register(User, UserAdmin)

# Remove groups from admin site.
admin.site.unregister(Group)
