from django.urls import path
from account.views import register , user_info , AllUsersView , get_single_user_information
# api request is coming from the frontend side .
urlpatterns = [
    path('register/', register, name='register'),
    path('user_info/', user_info, name='user_info'),
    path('all_users/', AllUsersView.as_view() , name='all user fetching'), # sending all users data
    path('user_info/<int:user_id>/', get_single_user_information, name='get_single_user_information'), # sending single user data
]
