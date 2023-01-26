from rest_framework import viewsets
from . import models
from . import serializers

class CityViewset(viewsets.ModelViewSet):
    queryset=models.city.objects.all()
    serializer_class=serializers.CitySerialiser