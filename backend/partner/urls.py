from django.urls import include, path
from rest_framework import routers
from .views import ClientForm


# router = routers.DefaultRouter()
# router.register(r'', ClientViewset)


urlpatterns = [
    path('', ClientForm, name='client-form')
]
