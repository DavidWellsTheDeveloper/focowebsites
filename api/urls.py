# api/urls.py

from django.urls import path
from . import views

from .views import router

app_name = 'api'

# Router paths handled in views.py
urlpatterns = router.urls
