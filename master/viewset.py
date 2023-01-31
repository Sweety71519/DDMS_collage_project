from rest_framework import viewsets,generics
from . import models
from . import serializers
from .serializers import *


class CityCreate(generics.CreateAPIView):
    queryset=models.city.objects.all()
    serializer_class=CitySerialiser


class CityList(generics.ListAPIView):
    queryset=models.city.objects.all()
    serializer_class=CitySerialiser

class Cityupdate(generics.UpdateAPIView):
    queryset=models.city.objects.all()
    serializer_class=CitySerialiser

class CityDelete(generics.DestroyAPIView):
    queryset=models.city.objects.all()
    serializer_class=CitySerialiser

# class CityViewset(viewsets.ModelViewSet):
#     queryset=models.city.objects.all()
#     serializer_class=serializers.CitySerialiser

# class StateViewset(viewsets.ModelViewSet):
#     queryset=models.State.objects.all()
#     serializer_class=serializers.StateSerialiser