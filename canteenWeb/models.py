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

class OrderItem(models.Model):
    pass

class Order(models.Model):
    pass

##################
# BILLING SYSTEM #
##################

class Bill(models.Model):
    pass
