from django.shortcuts import render


# Create your views here.

# import viewsets
from rest_framework import viewsets
 
# import local data
from .serializers import DealerDetailsSerializer
from .models import DealerDetails
 
# create a viewset
class DealerDetails(viewsets.ModelViewSet):
    # define queryset
    queryset = DealerDetails.objects.all()
     
    # specify serializer to be used
    serializer_class = DealerDetailsSerializer
