from django.shortcuts import render
from .models import *
from rest_framework import generics
from .serializers import *
from django.http import HttpResponse
import json
import random


class StudentAPIView(generics.ListAPIView):
    queryset = StudentAPISerializer.Meta.model.objects.all()
    serializer_class = StudentAPISerializer

class StudentCreateAPIView(generics.CreateAPIView):
    queryset = StudentAPISerializer.Meta.model.objects.all()
    serializer_class = StudentAPISerializer

def getStudents(request):
    return HttpResponse(json.dumps(list(Student.objects.all().values())), content_type="application/json")

def randomstudent(request):
    studentList = list(Student.objects.all().values())
    random_student = random.choice(studentList)
    entry = json.dumps(random_student)
    return HttpResponse(entry, content_type="application/json")

def getTemplate(request):
    return render(request, 'index.html')