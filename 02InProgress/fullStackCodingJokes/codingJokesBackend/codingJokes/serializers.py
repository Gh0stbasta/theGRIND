from .models import CodingJoke
from rest_framework import serializers

class CodingJokeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodingJoke
        fields = [
            'id',
            'joke',
            'punchline',
        ]