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
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register("orders", views.OrderViewSet)
router.register("bills", views.BillViewSet)
router.register("menu", views.MenuViewSet)
router.register("categories", views.CategoryViewSet)
router.register("user-orders", views.UserOrders)
router.register("student-user", views.StudentUserProfile)

urlpatterns = [
    path("", include(router.urls)),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.authtoken")),
    path("api-auth/", include("rest_framework.urls")),
    path("student_signup/", views.StudentSignUpView.as_view(), name='student_signup'),
    path("teacher_signup/", views.TeacherSignUpView.as_view(), name='teacher_signup'),
    path("category-menu/<int:category>/", views.CategoryWiseMenu.as_view(), name='category_wise_menu'),
]
