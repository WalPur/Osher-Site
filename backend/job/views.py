from rest_framework import viewsets, permissions
from .serializers import ApplicationSerializer, UserApplicationSerializer
from .models import Application, UserApplication


class ApplicationViewset(viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    permission_classes = [permissions.AllowAny]


class UserAppllicationViewset(viewsets.ModelViewSet):
    queryset = UserApplication.objects.all()
    serializer_class = UserApplicationSerializer
    permission_classes = [permissions.AllowAny]
    http_method_names = ['post']