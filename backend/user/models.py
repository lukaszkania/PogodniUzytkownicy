from django.db import models

# Create your models here.

class MyUser(models.Model):
    firstName  = models.CharField(max_length=40, blank=False)
    lastName  = models.CharField(max_length=40, blank=False)
    city = models.CharField(max_length=40, blank=False)
    country = models.CharField(max_length=40, blank=False)
    email = models.EmailField(blank=False, unique=True)
    password = models.CharField(max_length=50, blank=False)
    isSuperUser = models.BooleanField(default=False, blank=False)
    
    def __str__(self):
        return self.email

