from django.urls import path
from .views import CodingJokeAPIView
# from .jokeEntrys import *


urlpatterns = [
    path('', CodingJokeAPIView.as_view(), name="Coding Joke")
]
