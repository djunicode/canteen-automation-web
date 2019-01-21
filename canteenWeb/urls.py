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
router.register("menus", views.MenuViewSet)
router.register("bills", views.BillViewSet)
router.register("categories", views.CategoryViewSet)

urlpatterns = [
    path("", include(router.urls)),
    url(r"^signup/", views.SignUp.as_view(), name="signup"),
    url(r"^login/", views.Login.as_view(), name="login"),
    url(r"^logout/", views.Logout.as_view(), name="logout"),
    url(
        r"^student-registration/",
        views.StudentRegistration.as_view(),
        name="student-registration",
    ),
    url(
        r"^teacher-registration/",
        views.TeacherRegistration.as_view(),
        name="student-registration",
    ),
]
