from django.shortcuts import render


# Create your views here.

def index(request):
    data = {
        "user" : "Daten die wir rüber senden"
    }
    return render(request, "index.html", data)