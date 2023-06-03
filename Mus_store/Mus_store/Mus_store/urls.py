from django.contrib import admin
from polls import views as mus_views
from django.urls import re_path

from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from polls.views import *

router = routers.DefaultRouter()
router.register(r'products', mus_views.ProductViewSet)
router.register(r'categories', mus_views.CategoryViewSet)
router.register(r'subcats', mus_views.SubcategoryViewSet)
router.register(r'users', mus_views.UserViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('subs/', SubcatByCat.as_view()),
    path('product/', ProductsBySubcat.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/register/', Registration.as_view(), name='register'),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('authenticated', Check.as_view()),
    path('logout', LogoutView.as_view()),
    path('login', LoginView.as_view()),
    path('profile', profile.as_view()),
]
