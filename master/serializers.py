from rest_framework import serializers
from . import models

class CitySerialiser(serializers.Serializer):
    class Meta:
        model=models.city
        field=('id','city_name','district_name','std_code','action','status')#'__all__'


class StateSerialiser(serializers.Serializer):
    class Meta:
        model=models.State
        field='__all__'