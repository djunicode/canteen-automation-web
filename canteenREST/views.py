from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import generics
from django.contrib.auth.hashers import make_password
from django.http import JsonResponse
from canteenDb import choices


from canteenDb.models import (
    Order,
    MenuItem,
    Bill,
    Category,
    StudentProfile,
    TeacherProfile
)

from .serializers import (
    OrderSerializer,
    MenuItemSerializer,
    BillSerializer,
    CategorySerializer,
    StudentSignupSerializer,
    TeacherSignupSerializer,
    StudentProfileSerializer,
)


class MenuViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer


class BillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    # permission_classes = (permissions.IsAuthenticated,)

    @action(detail=True, methods=["put"])
    def accept(self, request, pk=None):
        """
            Accept an order by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Preparing"]
        order.save()
        return Response({"message": "Order accepted"})

    @action(detail=True, methods=["put"])
    def reject(self, request, pk=None):
        """
            Reject an order by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Rejected by Canteen"]
        order.save()
        return Response({"message": "Order rejected"})

    @action(detail=True, methods=["put"])
    def fulfil(self, request, pk=None):
        """
            Fulfil an order by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.is_fulfilled = True
        order.save()
        return Response({"message": "Order fulfilled"})

    @action(detail=True, methods=["put"])
    def unfulfil(self, request, pk=None):
        """
            Set order fulfil to false by PUT-ing to this end-point.
            Payload is ignored.
        """
        order = self.get_object()
        order.is_fulfilled = False
        order.save()
        return Response({"message": "Order unfulfilled"})

    @action(detail=False)
    def completed(self, request):
        """
            Return a list of all completed orders.
        """
        completed_orders = Order.objects.filter(is_fulfilled=True)
        serializer = self.get_serializer(completed_orders, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def pending(self, request):
        """
            Return a list of all pending orders.
        """
        pending_orders = Order.objects.filter(
            is_fulfilled=False
        )  # Should not be fulfilled and status should be positive.
        serializer = self.get_serializer(pending_orders, many=True)
        return Response(serializer.data)

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

class StudentSignUpView(generics.CreateAPIView):

    serializer_class = StudentSignupSerializer
    queryset = StudentProfile.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data["is_student"] = True
        if len(serializer.validated_data["username"]) != 11 or serializer.validated_data["username"][0] != '6':
            return Response({"error":"Incorrect Student Sap ID"}, status.HTTP_400_BAD_REQUEST)
        hashed_password = make_password(serializer.validated_data['password'])
        serializer.validated_data['password'] = hashed_password
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class TeacherSignUpView(generics.CreateAPIView):
    
    serializer_class = TeacherSignupSerializer
    queryset = TeacherProfile.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data["is_student"] = False
        serializer.validated_data["is_teacher"] = True
        if len(serializer.validated_data["username"]) not in [3, 8]:
            return Response({"error":"Incorrect Teacher Sap ID"}, status.HTTP_400_BAD_REQUEST)
        hashed_password = make_password(serializer.validated_data['password'])
        serializer.validated_data['password'] = hashed_password
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class CategoryWiseMenu(generics.ListAPIView):
    serializer_class = MenuItemSerializer

    def get_queryset(self):
        menu_list = MenuItem.objects.filter(category=self.kwargs['category'])
        return menu_list

class UserOrders(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    @action(detail=False)
    def previous_orders(self, request):
        """
            Return a list of all previous orders.
        """
        previous_orders_list = Order.objects.filter(user=request.user.id, is_fulfilled=True)
        serializer = self.get_serializer(previous_orders_list, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def current_orders(self, request):
        """
            Return a list of all current orders.
        """
        current_orders_list = Order.objects.filter(user=request.user.id, is_fulfilled=False)
        serializer = self.get_serializer(current_orders_list, many=True)
        return Response(serializer.data)

class StudentUserProfile(viewsets.ModelViewSet):
    queryset = StudentProfile.objects.all()
    serializer_class = StudentProfileSerializer

    @action(detail=False)
    def profile(self, request):
        student_profile = StudentProfile.objects.get(username=request.user.username)
        serializer = self.get_serializer(student_profile)
        return Response(serializer.data)