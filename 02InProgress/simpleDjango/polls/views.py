from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Question


# Create your views here.

def index(request):
    latest_question_list = Question.objects.order_by("-pubDate")[:5]
    template = loader.get_template("polls/index.html")
    context = {
        "latest_question_list": latest_question_list,
    }
    return HttpResponse(template.render(context, request))

def detail(request, question_id):
    return HttpResponse("Your looking at question %s." % question_id)

def results(request, question_id):
    response = "Your looking at the result of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("Youre voting on question %s." % question_id)