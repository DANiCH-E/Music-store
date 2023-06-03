from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse

from polls.models import *
from polls.serializers import *
from rest_framework import generics

class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer

class ProductViewSet(viewsets.ModelViewSet):

    queryset = Product.objects.all().order_by('id')
    serializer_class = ProductSerializer  # Сериализатор для модели

class CategoryViewSet(viewsets.ModelViewSet):

    queryset = Category.objects.all().order_by('id')
    serializer_class = CategorySerializer  # Сериализатор для модели

class SubcategoryViewSet(viewsets.ModelViewSet):

    queryset = Subcat.objects.all().order_by('id')
    serializer_class = SubcatSerializer  # Сериализатор для модели

class SubcatByCat(generics.ListAPIView):
    serializer_class = SubcatSerializer
    http_method_names = ["get"]

    def get_queryset(self):
        queryset = Subcat.objects.all()
        cat = self.request.query_params.get('category')
        if cat is not None:
            queryset = queryset.filter(category=cat)
        return queryset

class ProductsBySubcat(generics.ListAPIView):
    serializer_class = ProductSerializer
    http_method_names = ["get"]

    def get_queryset(self):
        queryset = Product.objects.all()
        subcat = self.request.query_params.get('subcat')
        if subcat is not None:
            queryset = queryset.filter(subcat=subcat)
        return queryset

class Registration(APIView):
    def post(self, request, format=None):
        data = self.request.data
        username = data['username']
        password = data['password']
        email = data['email']
        if User.objects.filter(username = username).exists():
            return Response({'error':'Username already exists'})
        else:
            user = User.objects.create_user( username=username, password=password)
            user.user_permissions.add(*Permission.objects.filter(codename='view_sign_up'))
            user.user_permissions.add(*Permission.objects.filter(codename='add_sign_up'))
            # user.user_permissions.add(permissions)
            user.save()
        return Response({'success': 'User created'});

class GetCSRFToken(APIView):
    def get(self, request, format=None):
        return Response({'success': 'CSRF cookie set'})

class Check(APIView):
    def get(self, request, format=None):
        user = self.request.user
        isAuthentificated = user.is_authentificated

        if isAuthentificated:
            return Response({'isAuthentificated': 'success'})
        else:
            return Response({'isAuthentificated': 'error'})

class LoginView(APIView):
    def post(self, request, format=None):
        data = self.request.data
        username = data['username']
        password = data['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'success':'User authenticated', 'username': username, 'id':user.id})
        else:
            return Response({'error':'Error Authenticated'})

class LogoutView(APIView):
    def post(self, request, format=None):

        try:
            logout(request)
            return Response({'success': 'User Logout'})
        except:
            return Response({'error':'Error logout'})


class profile(APIView):
    serializer_class = UserSerializer
    def get(self, request, format=None):
        data = self.request.data

        #     profile = User.objects.get(pk = user.data.pk)
        return HttpResponse({'success': data})