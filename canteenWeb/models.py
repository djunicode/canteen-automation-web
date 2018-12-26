from django.db import models
from django.contrib.auth.models import AbstractUser

#########################
# AUTHENTICATION SYSTEM #
#########################


class User(AbstractUser):
    USERNAME_FIELD = models.CharField(max_length = 30,unique = True, default = "")  #sap id
    EMAIL_FIELD = models.EmailField(max_length = 40, blank = True, unique=True)
    first_name = models.CharField(max_length = 15)
    last_name = models.CharField(max_length = 15)
    phone_number = models.CharField(max_length = 12, blank = True)
    device_id = models.CharField(max_length = 30, default = "")# For use by android team
    is_student = models.BooleanField(default = True)# to check whether the user is student
    is_teacher = models.BooleanField(default = False)# to check whether the user is teacher
    is_banned = models.BooleanField(default = False) # To check whether the user is banned
    is_staff = models.BooleanField(default = False)

class StudentProfile(models.Model):
    student =  models.OneToOneField(User, on_delete = models.CASCADE, null = True)
    division = models.CharField(max_length = 1, default = 'A')
    department = models.CharField(max_length = 30, default = None)
    admission_year = models.PositiveSmallIntegerField(default = 1)


class TeacherProfile(models.Model):
    teacher =  models.OneToOneField(User, on_delete = models.CASCADE, null = True)
    floor = models.PositiveSmallIntegerField(default = None)
    department = models.CharField(max_length = 30, default = None)


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
