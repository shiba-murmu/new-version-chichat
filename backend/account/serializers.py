from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

class RegisterSerializer(serializers.ModelSerializer):
    # This is the serializer class for the Register view. It is used to validate
    # the input data and create a new user object.
    # 
    # The fields that are included in the serializer are the first_name, last_name,
    # username, email, password, and confirm_password fields. The password and
    # confirm_password fields are write_only, meaning that they will not be
    # included in the response.
    # 
    # The validate method is used to validate the input data. It checks if the
    # password and confirm_password fields are the same. If they are not, it
    # raises a ValidationError.
    # 
    # The create method is used to create a new user object. It takes the
    # validated data that was passed in and creates a new user object with the
    # appropriate fields.
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    # The write_only flag means that the password will not be included in the
    # response. This is generally a good idea since passwords should be kept
    # secret.
    confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        # This is the meta class of the serializer. It is used to define the
        # fields that are included in the serializer.
        model = User
        fields = ('first_name', 'last_name', 'username', 'email', 'password', 'confirm_password')   

    def validate_username(self, value) :
        """Check if username already exits"""
        print('i am validating username : ')
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError('Username already taken')
        return value
    def validate_email(self, value):
        print('I am validating from the mail functions : ')
        """Check is email already exits (not enforced by default in Django)."""
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already registered.")
        return value 
    
    def validate(self, attrs):
        # This function is used to validate the input data. It checks if the password
        # and confirm_password fields are the same. If they are not, it raises a
        # ValidationError.
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({"confirm_password": "Password fields didn't match."})

        return attrs
    def create(self, validated_data):
        # This function is used to create a new user object. It takes the validated
        # data that was passed in and creates a new user object with the
        # appropriate fields.
        validated_data.pop('confirm_password')
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        return user