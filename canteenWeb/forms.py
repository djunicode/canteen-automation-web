from django import forms


class UserCreationForm(forms.ModelForm):
    class Meta:
        model = User
        fields = "__all__"


class UserUpdateForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ("phone_number", "is_banned", "is_student", "is_teacher", "device_id")
