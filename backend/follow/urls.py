from django.urls import path
from . import views
urlpatterns = [
    path('new_user/', views.follow_user, name='follow'),
    path('following_users_list/', views.following_users_list, name='following_users_list'),
]
