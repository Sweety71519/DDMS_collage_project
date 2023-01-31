from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *

# Create your views here.


# class CityCreate(generics.CreateAPIView):
#     queryset=city.objects.all()
#     serializer_class=CitySerialiser


# class CityList(generics.ListAPIView):
#     queryset=city.objects.all()
#     serializer_class=CitySerialiser

# class CityDetails(generics.UpdateAPIView):
#     queryset=city.objects.all()
#     serializer_class=CitySerialiser

# class CityDetails(generics.DestroyAPIView):
#     queryset=city.objects.all()
#     serializer_class=CitySerialiser
