"""
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from django.conf.urls import url
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register("orders", views.OrderViewSet, base_name="orders")

urlpatterns = [
    path("", include(router.urls)),
    url(r"^menu_item/$", views.MenuItemList.as_view(), name="menu_item_list"),
    url(r"^menu_item/add/$", views.AddMenuItem.as_view(), name="add_menu_item"),
    url(
        r"^menu_item/(?P<menu_item_id>[0-9]+)/$",
        views.MenuItemDetails.as_view(),
        name="menu_item_detail",
    ),
]
