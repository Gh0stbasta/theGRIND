from django.shortcuts import render
from .models import Bike
from .serializers import BikeSerializer
from rest_framework import generics

# Create your views here.

class BikeView(generics.ListAPIView):
    queryset = Bike.objects.all()
    serializer_class = BikeSerializer