from rest_framework.decorators import api_view ,permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Follow
from django.contrib.auth.models import User

# Create your views here.

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def follow_user(request):
    follower = request.user
    following_id = request.data.get('user_id')
    
    try:
        following = User.objects.get(id=following_id)
        if follower == following:
            return Response({'message': 'You cannot follow yourself.'}, status=status.HTTP_400_BAD_REQUEST)
        follow, created = Follow.objects.get_or_create(follower=follower, following=following)
        if created:
            return Response({'message': f'You are now following {following.username}.'}, status=status.HTTP_201_CREATED)
        else :
            return Response({'message': f'You are already following {following.username}.'}, status=status.HTTP_400_BAD_REQUEST)
    except User.DoesNotExist:
        return Response({'message': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)