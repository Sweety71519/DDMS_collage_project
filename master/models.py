from django.db import models

# Create your models here.

class city(models.Model):
    city_name=models.CharField(max_length=100)
    district_name=models.CharField(max_length=100)
    std_code=models.CharField(max_length=25)
    action=models.CharField(max_length=25)
    status=models.CharField(max_length=25)

class State(models.Model):
    statecode=models.IntegerField(auto_created=True,primary_key=True)
    statename=models.CharField(max_length=250)
    zonecode=models.IntegerField()
    countrycode=models.IntegerField()
    status=models.BooleanField()
    created_at=models.DateTimeField()
    updated_at=models.DateTimeField()

