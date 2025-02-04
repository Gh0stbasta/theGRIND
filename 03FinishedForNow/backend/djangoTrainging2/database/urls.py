from django.urls import path
from .views import UserView

urlpatterns = [
    path('api/', UserView.as_view(), name="UserView")
]