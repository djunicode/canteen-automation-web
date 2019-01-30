from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from django.http import Http404
from rest_framework import viewsets, permissions, status, views
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from drf_yasg.utils import no_body, swagger_auto_schema
from drf_yasg import openapi
from . import choices
from .models import (
    Order,
    MenuItem,
    User,
    StudentProfile,
    TeacherProfile,
    Bill,
    Category,
    Ingredients,
)
from .serializers import (
    OrderSerializer,
    MenuItemSerializer,
    SignUpSerializer,
    LoginSerializer,
    StudentProfileSerializer,
    TeacherProfileSerializer,
    BillSerializer,
    CategorySerializer,
    IngredientsSerializer,
)


class IsAdminUserOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        return (
            request.method in permissions.SAFE_METHODS
            or request.user
            and request.user.is_staff
        )


# Create your views here.


class MenuViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer
    permission_classes = (IsAdminUserOrReadOnly,)


class BillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class IngredientsViewset(viewsets.ModelViewSet):
    queryset = Ingredients.objects.all()
    serializer_class = IngredientsSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = (permissions.IsAuthenticated,)

    @swagger_auto_schema(request_body=no_body, responses={200: None})
    @action(detail=True, methods=["put"], permission_classes=[permissions.IsAdminUser])
    def accept(self, request, pk=None):
        """
            Accept an order by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Preparing"]
        order.save()
        return Response({"message": "Order accepted"})

    @swagger_auto_schema(request_body=no_body, responses={200: None})
    @action(detail=True, methods=["put"], permission_classes=[permissions.IsAdminUser])
    def reject(self, request, pk=None):
        """
            Reject an order by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Rejected by Canteen"]
        order.save()
        return Response({"message": "Order rejected"})

    @swagger_auto_schema(request_body=no_body, responses={200: None})
    @action(detail=True, methods=["put"], permission_classes=[permissions.IsAdminUser])
    def fulfil(self, request, pk=None):
        """
            Fulfil an order by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.is_fulfilled = True
        order.save()
        return Response({"message": "Order fulfilled"})

    @swagger_auto_schema(request_body=no_body, responses={200: None})
    @action(detail=True, methods=["put"], permission_classes=[permissions.IsAdminUser])
    def unfulfil(self, request, pk=None):
        """
            Set order fulfil to false by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.is_fulfilled = False
        order.save()
        return Response({"message": "Order unfulfilled"})

    @swagger_auto_schema(responses={200: OrderSerializer(many=True)})
    @action(detail=False, permission_classes=[permissions.IsAdminUser])
    def completed(self, request):
        """
            Return a list of all completed orders.
        """
        completed_orders = Order.objects.filter(is_fulfilled=True)
        serializer = self.get_serializer(completed_orders, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(responses={200: OrderSerializer(many=True)})
    @action(detail=False, permission_classes=[permissions.IsAdminUser])
    def pending(self, request):
        """
            Return a list of all pending orders.
        """
        pending_orders = Order.objects.filter(
            is_fulfilled=False, status__gte=0
        )  # Should not be fulfilled and status should be positive.
        serializer = self.get_serializer(pending_orders, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(responses={200: None})
    @action(detail=False)
    def status_options(self, request):
        """
            Show all possible preparation status options for an order.
        """
        return Response(choices.STATUS_DICTIONARY)

    @action(
        detail=True,
        methods=["get", "post"],
        permission_classes=[permissions.IsAdminUser],
    )
    def change_status(self, request, pk=None):
        """
            Change the preparation status of an order.
        """
        order = self.get_object()
        data = request.data
        if "status" in data:
            if int(data["status"]) in choices.STATUS_DICTIONARY_REVERSE:
                order.status = int(data["status"])
                order.save()
                return Response(
                    {
                        "message": "Order status changed",
                        "status": choices.STATUS_DICTIONARY_REVERSE[order.status],
                    }
                )
            else:
                return Response(
                    {"error": "Status not recognised", "status": data["status"]},
                    status.HTTP_400_BAD_REQUEST,
                )
        else:
            return Response(
                {"error": "Missing status in request body"}, status.HTTP_400_BAD_REQUEST
            )


class SignUp(APIView):
    serializer_class = SignUpSerializer

    def post(self, request):
        serializer = SignUpSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            if serializer.data.get("is_student"):
                return HttpResponseRedirect(redirect_to="/student-registration/")
            elif serializer.data.get("is_teacher"):
                return HttpResponseRedirect(redirect_to="/teacher-registration/")
            else:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


class Login(APIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(
                username=serializer.data.get("username"),
                # password=serializer.data.get("password"),
            )
            login(request, user)
            return HttpResponseRedirect(redirect_to="/menus/")
        else:
            return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


class Logout(APIView):
    def post(self, request):
        logout(request)
        return HttpResponseRedirect(redirect_to="/login/")


class StudentRegistration(APIView):
    serializer_class = StudentProfileSerializer

    def post(self, request):
        serializer = StudentProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TeacherRegistration(APIView):
    serializer_class = TeacherProfileSerializer

    def post(self, request):
        serializer = TeacherProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
