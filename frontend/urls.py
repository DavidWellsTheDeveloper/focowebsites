from django.urls import path
from . import views

urlpatterns = [
    path('', views.HomeView.as_view(), name='default'),
    path('home', views.HomeView.as_view(), name='home'),
    path('about', views.AboutView.as_view(), name='about'),
    path('services', views.ConstructionView.as_view(), name="services"),
    path('contact', views.ContactView.as_view(), name="contact"),
    path('construction', views.ConstructionView.as_view(), name='construction'),
]
