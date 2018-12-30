from django.conf.urls import url
from django.conf.urls import include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register("items", views.MenuViewSet)

urlpatterns = [url("", include(router.urls))]
