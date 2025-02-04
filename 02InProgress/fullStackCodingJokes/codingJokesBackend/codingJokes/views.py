from django.shortcuts import render
from .models import CodingJoke
from .serializers import CodingJokeSerializer
from rest_framework import generics

# Create your views here.

class CodingJokeAPIView(generics.ListAPIView):
    queryset = CodingJoke.objects.all()
    serializer_class = CodingJokeSerializer