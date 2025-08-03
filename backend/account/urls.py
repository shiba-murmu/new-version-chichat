from django.urls import path
from account.views import register , login
# api request is coming from the frontend side .
urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login , name='Login')
]
