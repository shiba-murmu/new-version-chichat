from django.http import HttpResponse

def index(request):
    return HttpResponse("Server is running success fully.")