from django.shortcuts import render
from .serializers import StudentSerializer
from .models import Student
from rest_framework import generics

# Create your views here.


class StudentView(generics.ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
