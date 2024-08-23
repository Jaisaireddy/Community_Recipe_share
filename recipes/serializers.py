from rest_framework import serializers
from .models import Recipe
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']

class RecipeSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)
    class Meta:
        model = Recipe
        fields = ['id','title', 'description', 'ingredients', 'steps', 'created_at', 'created_by']