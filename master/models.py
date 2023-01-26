from django.db import models

# Create your models here.

class city(models.Model):
    city_name=models.CharField(max_length=100)
    district_name=models.CharField(max_length=100)
    std_code=models.CharField(max_length=25)
    action=models.CharField(max_length=25)
    status=models.CharField(max_length=25)
