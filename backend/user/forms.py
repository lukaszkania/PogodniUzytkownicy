from django import forms
from user.models import MyUser

class UserForm(forms.ModelForm):
    class Meta:
        model = MyUser
        widgets = {
        'password': forms.PasswordInput(),
    }