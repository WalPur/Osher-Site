from django.core.mail import send_mail
from django.conf import settings


from rest_framework.decorators import api_view
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .serializers import ClientSerializer
from .models import Client


@api_view(['POST'])
def ClientForm(request):
    serializer_class = ClientSerializer(data=request.data)
    if serializer_class.is_valid():
        serializer_class.save()

        subject = 'Новая заяка на сайте osher.tech'
        message = str(serializer_class.data)
        email_from = settings.EMAIL_HOST_USER
        recipient_list = ['mishkamba1@gmail.com',]
        send_mail( subject, message, email_from, recipient_list )
    return Response(serializer_class.data)
