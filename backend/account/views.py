# from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer , LoginSerializer

# Create your views here.

@api_view(['POST'])
def login(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        return Response(
            {
                'success' : True,
                'message' : f'Welcome {serializer.validated_data["user"].first_name + " " + serializer.validated_data["user"].last_name}'
            },
            status=status.HTTP_200_OK
        )
    return Response (
        {
            'success': False,
            'errors': serializer.errors
        }, 
        status= status.HTTP_401_UNAUTHORIZED
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
