from rest_framework import serializers
from .models import *

class StudentAPISerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


