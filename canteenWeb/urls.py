"""
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examplauthes:
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
router.register("bills", views.BillViewSet)
router.register("menu", views.MenuViewSet)
router.register("categories", views.CategoryViewSet)
router.register("ingredients", views.IngredientsViewset)

urlpatterns = [
    path("", include(router.urls)),
    path("signup/", views.SignUp.as_view(), name="signup"),
    path("login/", views.Login.as_view(), name="login"),
    path("logout/", views.Logout.as_view(), name="logout"),
    path(
        "student-registration/",
        views.StudentRegistration.as_view(),
        name="student-registration",
    ),
    path(
        "teacher-registration/",
        views.TeacherRegistration.as_view(),
        name="teacher-registration",
    ),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.authtoken")),
    path("api-auth/", include("rest_framework.urls")),
]
