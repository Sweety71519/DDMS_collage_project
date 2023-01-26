from rest_framework import serializers
from .models import city

class CitySerialiser(serializers.Serializer):
    class Meta:
        model=city
        field='__all__'