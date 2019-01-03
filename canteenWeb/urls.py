from django.conf.urls import url
from django.conf.urls import include
from . import views

urlpatterns = [
    url(r"^$", views.ListMenu.as_view(), name="list"),
    url(r"^create/$", views.CreateMenu.as_view(), name="create"),
    url(r"^(?P<pk>\d+)/$", views.ModifyMenu.as_view(), name="modify"),
    url(r"^signup/$", views.signup, name="signup"),
    url(r"^login/$", views.login_view, name="login"),
    url(r"^logout/$", views.logout_view, name="logout"),
]
