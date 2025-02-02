from django.urls import path
from .views import *
from .studentJsonData import studentJsonData

# here are the routes   


urlpatterns = [
    path("show/", getTemplate),
    path("random/", randomstudent),
    path("create/", StudentCreateAPIView.as_view()),
    path("all/", getStudents),
    path("", StudentAPIView.as_view()),
]