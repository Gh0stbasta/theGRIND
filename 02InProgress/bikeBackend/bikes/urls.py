from django.urls import path
from .views import BikeView
# from .dataload import *

urlpatterns = [
    path('', BikeView.as_view(), name="BikeView")
]