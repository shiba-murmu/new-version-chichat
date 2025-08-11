# from django.shortcuts import render
from rest_framework.decorators import api_view ,permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework.views import APIView
from .utils import generate_otp, send_otp_email , send_otp_email_for_reset
from django.utils import timezone
from .models import OTP
from .serializers import RegisterSerializer , UserSerializer

class Generate_otp_for_reset(APIView):
    def post(self, request):
        email = request.data.get('email')
        if not email:
            return Response({'error' : 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        if not User.objects.filter(email=email).exists():
            return Response({'error' : 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        
        # Delete any existing OTP for this email
        OTP.objects.filter(email=email).delete()

        # Generate and save new OTP
        otp = generate_otp()
        OTP.objects.create(email=email, otp=otp)

        # Send OTP via email
        try:
            send_otp_email_for_reset(email, otp)
            return Response({'message' : 'OTP send successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
@api_view(['GET'])
def username_exists(request):
    username = request.query_params.get('username')
    if User.objects.filter(username=username).exists():
        return Response({'username_exists': True}, status=status.HTTP_200_OK)
    return Response({'username_exists': False}, status=status.HTTP_200_OK)

@api_view(['GET'])
def email_exists(request):
    email = request.query_params.get('email')
    if User.objects.filter(email=email).exists():
        return Response({'email_exists': True}, status=status.HTTP_200_OK)
    return Response({'email_exists': False}, status=status.HTTP_200_OK)

class GenerateOTPView(APIView):
    def post(self, request):
        email = request.data.get('email')
        if not email:
            return Response({'error' : 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Delete any existing OTP for this email
        OTP.objects.filter(email=email).delete()
        

        # Generate and save new OTP
        otp = generate_otp()
        OTP.objects.create(email=email, otp=otp)

        # Send OTP via email
        try:
            send_otp_email(email, otp)
            return Response({'message' : 'OTP send successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class VerifyOTPView(APIView):
    def post(self, request):
        email = request.data.get('email')
        otp = request.data.get('otp')
        
        try:
            otp_obj = OTP.objects.get(email=email)
            if otp_obj.is_verified:
                return Response({'error': 'OTP already verified'}, status=status.HTTP_400_BAD_REQUEST)
            if otp_obj.is_expired():
                return Response({'error': 'OTP has expired'}, status=status.HTTP_400_BAD_REQUEST)
            if otp_obj.otp != otp:
                return Response({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)
            
            otp_obj.is_verified = True
            otp_obj.save()
            return Response({'message': 'OTP verified successfully'}, status=status.HTTP_200_OK)
        except OTP.DoesNotExist:
            return Response({'error': 'OTP not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_single_user_information(request, user_id): 
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = UserSerializer(user)
    return Response(serializer.data)

class AllUsersView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        users = User.objects.filter(is_staff=False)
        
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_info(request):
    user = request.user
    return Response (
        {
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name
        }
    )


@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {
                "success": True,
                "message": "User registered successfully."
            },
            status=status.HTTP_201_CREATED
        )
        
    return Response(
        {
            "success": False,
            "errors": serializer.errors
        },
        status=status.HTTP_400_BAD_REQUEST
    )
