from rest_framework import viewsets
from polls.models import *
from polls.serializers import *
from rest_framework import generics

class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = Product.objects.all().order_by('id')
    serializer_class = ProductSerializer  # Сериализатор для модели

class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
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

