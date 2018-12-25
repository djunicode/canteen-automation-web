from django.db import models
from django.contrib.auth.models import AbstractUser


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
    user = models.ForeignKey(
        User,
        on_delete = models.CASCADE,
    )
    total_price = models.IntegerField()
    is_fulfilled = models.BooleanField(
        default=False
    )


class OrderItem(models.Model):
    menu_item = models.ForeignKey(
        MenuItem, 
        on_delete = models.CASCADE, 
    )
    quantity = models.SmallIntegerField()
    comment = models.TextField()
    price = models.IntegerField()
    order = models.ForeignKey(
        Order,
        on_delete = models.CASCADE,
    )


##################
# BILLING SYSTEM #
##################


class Bill(models.Model):
    pass
