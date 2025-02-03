from django.urls import path
from .views import BikeView

urlpatterns = [
    path('', BikeView.as_view(), name="BikeView")
]