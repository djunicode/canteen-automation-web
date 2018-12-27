from django.db import models
from django.contrib.auth.models import AbstractUser
import datetime

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


CHOICES = (
    ('JAIN','Jain'),
    ('NON JAIN','Non Jain'),
    ('BOTH','Both'),
)

class MenuItem(models.Model):
    name = models.CharField(max_length = 20)
    price = models.PositiveIntegerField(blank = False, null = False)
    is_available = models.BooleanField(default = True)
    preparation_time = models.TimeField(blank = True, null = True)
    options = models.CharField(max_length = 8, choices = CHOICES)

    def __str__(self):
        return self.name



###################
# ORDERING SYSTEM #
###################


class OrderItem(models.Model):
    pass


class Order(models.Model):
    pass


##################
# BILLING SYSTEM #
##################


class Bill(models.Model):
    pass