from polls.models import *
from rest_framework import serializers
from django.contrib.auth.models import User, Permission

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Product
        # Поля, которые мы сериализуем
        fields = ["id", "title", "category", "subcat", "color", "description", "price"]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Category
        # Поля, которые мы сериализуем
        fields = ["id", "name"]

class SubcatSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Subcat
        # Поля, которые мы сериализуем
        fields = ["id", "name", "category"]