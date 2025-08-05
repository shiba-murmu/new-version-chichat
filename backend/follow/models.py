from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Follow(models.Model):
    follower = models.ForeignKey(User , related_name='following_set', on_delete=models.CASCADE)
    following = models.ForeignKey(User , related_name='follower_set', on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ('follower', 'following') # prevent duplicate to follow
    
    def __str__(self):
        return f'{self.follower.username} follows {self.following.username}'
