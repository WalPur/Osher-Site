from .models import Application, UserApplication
from rest_framework import serializers


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'


class UserApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserApplication
        fields = '__all__'