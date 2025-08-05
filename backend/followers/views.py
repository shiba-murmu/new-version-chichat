from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def follow(request):
    return HttpResponse("Server is running success fully.")

def unfollow(request):
    return HttpResponse("Server is running success fully.")
