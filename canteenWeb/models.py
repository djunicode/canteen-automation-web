from django.db import models
from django.contrib.auth.models import AbstractUser
from . import choices

#########################
# AUTHENTICATION SYSTEM #
#########################


class User(AbstractUser):
    pass


class StudentProfile(models.Model):
    pass


class TeacherProfile(models.Model):
    pass


#####################
# CUSTOMIZABLE MENU #
#####################


class MenuItem(models.Model):
    pass


###################
# ORDERING SYSTEM #
###################


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_price = models.IntegerField(default=0)
    is_fulfilled = models.BooleanField(default=False)
    status = models.SmallIntegerField(choices=choices.STATUS_CHOICES, default=0)
    transaction_id = models.CharField(max_length=256, blank=True, default="")
    time_issued = models.DateTimeField(auto_now_add=True)
    time_sheduled = models.DateTimeField(null=True)
    time_prepared = models.DateTimeField(null=True)
    time_delivered = models.DateTimeField(null=True)
    payment_choices = models.CharField(
        max_length=8, choices=choices.PAYMENT_MODE_CHOICES, default="COD"
    )


class OrderItem(models.Model):
    menu_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, related_name="items", on_delete=models.CASCADE)
    quantity = models.SmallIntegerField()
    comment = models.TextField()
    price = models.IntegerField()


##################
# BILLING SYSTEM #
##################


class Bill(models.Model):
    pass
