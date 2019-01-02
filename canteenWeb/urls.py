from django.conf.urls import url
from django.conf.urls import include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register("items", views.MenuViewSet, basename='items')

urlpatterns = [
    url("", include(router.urls)),
    url("signup", views.signup, name='signup'),
    url("login", views.login_view, name='login'),
    url("logout", views.logout_view, name='logout')
]
