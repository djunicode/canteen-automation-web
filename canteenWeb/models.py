from django.db import models
from django.contrib.auth.models import AbstractUser

#########################
# AUTHENTICATION SYSTEM #
#########################


class User(AbstractUser):
    phone_number = models.CharField(max_length=12, blank=True)
    device_id = models.CharField(max_length=32, blank=True)  # For use by android team
    is_banned = models.BooleanField(
        default=False
    )  # To check whether the user is banned
    is_student = models.BooleanField(
        default=True
    )  # to check whether the user is student
    is_teacher = models.BooleanField(
        default=False
    )  # to check whether the user is teacher


class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    division = models.CharField(max_length=8, default="A")
    department = models.CharField(max_length=32, blank=True)
    admission_year = models.PositiveSmallIntegerField(null=True)


class TeacherProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    floor = models.PositiveSmallIntegerField(null=True)
    department = models.CharField(max_length=32, null=True)


#####################
# CUSTOMIZABLE MENU #
#####################


class MenuItem(models.Model):
    pass


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
