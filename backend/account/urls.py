from django.urls import path
from account.views import (
    register ,
    user_info ,
    AllUsersView ,
    get_single_user_information ,
    GenerateOTPView ,
    VerifyOTPView,
    email_exists,
    username_exists
)
# api request is coming from the frontend side .
urlpatterns = [
    path('register/', register, name='register'),
    path('user_info/', user_info, name='user_info'),
    path('all_users/', AllUsersView.as_view() , name='all user fetching'), # Sending all users data
    path('user_info/<int:user_id>/', get_single_user_information, name='get_single_user_information'), # Sending single user data
    path('generate-otp/', GenerateOTPView.as_view(), name='generate_otp'),
    path('verify-otp/', VerifyOTPView.as_view(), name='verify-otp'),
    path('email-exists/', email_exists, name='email_exists'),
    path('username-exists/', username_exists, name='username_exists'),
]
