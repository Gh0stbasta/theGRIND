from .models import Bike
from rest_framework import serializers

class BikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = [
            'id',
            'brand',
            'modelname',
            'weight',
            'cost',
            'img'
        ]


