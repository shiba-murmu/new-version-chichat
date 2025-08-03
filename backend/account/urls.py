from django.urls import path
from account.views import register 
# api request is coming from the frontend side .
urlpatterns = [
    path('register/', register, name='register'),
    
]
