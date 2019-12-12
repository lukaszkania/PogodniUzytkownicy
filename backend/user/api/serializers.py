from rest_framework import serializers
from user.models import MyUser

#MyUser serializer
class MyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = "__all__"