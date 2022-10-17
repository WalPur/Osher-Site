from django.urls import include, path
from rest_framework import routers
from .views import (
    ApplicationVacancyViewset, 
    ApplicationInternViewset, 
    ApplicationForm
)


router = routers.DefaultRouter()
router.register(r'intern', ApplicationInternViewset)
router.register(r'vacancy', ApplicationVacancyViewset)


urlpatterns = [
    path('', include(router.urls)),
    path('user/', ApplicationForm, name="application-form")
]
