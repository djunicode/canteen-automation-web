from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register("menuItem", views.MenuItemViewSet)

urlpatterns = [path("web/", include(router.urls))]
