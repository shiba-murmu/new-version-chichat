from django.urls import path
from . import views
urlpatterns = [
    path('new_user/', views.follow_user, name='follow'),
    path('following_users_list/', views.following_users_list, name='following_users_list'),
    path('check_if_user_is_following/', views.check_if_user_is_following, name='check_if_user_is_following'),
    path('unfollow_user/', views.unfollow_user, name='follow_user'),
]
