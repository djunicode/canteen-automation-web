from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group
from .models import User, Category, MenuItem, Order, Bill


# Our custom user model.
class UserAdmin(admin.ModelAdmin):
    model = User
    filter_horizontal = ("user_permissions",)


admin.site.register(User, UserAdmin)

# Remove groups from admin site.
admin.site.unregister(Group)

admin.site.register(Order)
admin.site.register(Category)
admin.site.register(MenuItem)
admin.site.register(Bill)
