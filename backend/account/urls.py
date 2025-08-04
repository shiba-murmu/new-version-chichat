from django.urls import path
from account.views import register , user_info
# api request is coming from the frontend side .
urlpatterns = [
    path('register/', register, name='register'),
    path('user_info/', user_info, name='user_info'),
]
