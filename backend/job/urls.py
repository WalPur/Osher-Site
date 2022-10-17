from django.urls import include, path
from rest_framework import routers
from .views import ApplicationViewset, UserAppllicationViewset


router = routers.DefaultRouter()
router.register(r'application', ApplicationViewset)
router.register(r'user', UserAppllicationViewset)


urlpatterns = [
    path('', include(router.urls)),
]
