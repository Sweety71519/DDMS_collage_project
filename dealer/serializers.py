from serializers import rest_framework
from rest_framework import serializers
 
# import model from models.py
from .models import DealerDetails
 
# Create a model serializer
class DealerDetailsSerializer(serializers.HyperlinkedModelSerializer):
    # specify model and fields
    class Meta:
        model = DealerDetails
        fields = ('id','del_name','del_add','del_id','description')