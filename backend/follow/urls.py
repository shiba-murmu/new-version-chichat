from django.urls import path
from . import views
urlpatterns = [
    path('new_user/', views.follow_user, name='follow'),
    
]
