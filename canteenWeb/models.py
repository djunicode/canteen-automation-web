from django.db import models

# Create your models here.
class MenuItem(models.Model):
    name = models.CharField(max_length=255)
    price = models.PositiveSmallIntegerField()
    is_available = models.BooleanField(default=True)
    FOOD_CHOICES = (
        ('Jain', 'Jain'),
        ('Non-Jain', 'Non-Jain'),
        ('Both', 'Both'),
    )
    options = models.CharField(max_length=10, choices=FOOD_CHOICES, default='Non-Jain')
    preperation_time = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.name
