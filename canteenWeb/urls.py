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
from django.conf.urls import url, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register("orders", views.OrderViewSet)

urlpatterns = [
    url(r"^list$", views.ListMenu.as_view(), name="list"),
    url(r"^create/$", views.CreateMenu.as_view(), name="create"),
    url(r"^(?P<pk>\d+)/$", views.ModifyMenu.as_view(), name="modify"),
    url(r"^signup/$", views.signup, name="signup"),
    url(r"^login/$", views.login_view, name="login"),
    url(r"^logout/$", views.logout_view, name="logout"),
    url(r"", include(router.urls)),
]
