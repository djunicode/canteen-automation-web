from django.urls import path, include
from django.conf.urls import url, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register("orders", views.UserOrderViewSet)
urlpatterns = [path("", include(router.urls))]
