from rest_framework.decorators import api_view ,permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Follow
from django.contrib.auth.models import User
from account.serializers import UserSerializer

# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def check_if_user_is_following(request):
    follower = request.user
    following_id = request.query_params.get('user_id')
    following = User.objects.get(id=following_id)
    is_following = Follow.objects.filter(follower=follower, following=following).exists()
    print(is_following)
    return Response({'is_following': is_following}, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def unfollow_user(request):
    follower = request.user
    following_id = request.query_params.get('user_id')
    following = User.objects.get(id=following_id)
    follow = Follow.objects.filter(follower=follower, following=following).first()
    if follow:
        follow.delete()
        return Response({'message': f'You have unfollowed {following.username}.'}, status=status.HTTP_200_OK)
    else:
        return Response({'message': f'You are not following {following.username}.'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def following_users_list(request):
    # This function will be fetch the user's following list.
    following_users = Follow.objects.filter(follower=request.user).values_list('following_id', flat=True)
    # this will return the user's following list , simple it checks the user is following some user or not
    if not following_users:
        return Response({'message': 'You are not following any user.'}, status=status.HTTP_200_OK)
    following_user_data = User.objects.filter(id__in=following_users)
    # this will return the user's data from User model
    following_users = UserSerializer(following_user_data, many=True).data
    # this will return the user's data in json format
    # print(following_users)
    return Response(following_users, status=status.HTTP_200_OK)

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