from django.shortcuts import render
from rest_framework import viewsets
from django.shortcuts import render
from django.views.generic import TemplateView
# from .forms import InputDataForm
import urllib.request

# Create your views here.

from rest_framework import routers


class HomeView(TemplateView):
    template_name = "frontend/index.html"

    def get(self, request):
        # form = InputDataForm()
        carousel_images = [{'path': 'frontend/img/carousel/andreas-klassen-gZB-i-dA6ns-unsplash.jpg', 'alt': 'Some alt', 'active': 'active'},
                           {'path': 'frontend/img/carousel/christina-wocintechchat-com-9-ohfp-Dicg-unsplash.jpg', 'alt': 'Some alt'},
                           {'path': 'frontend/img/carousel/danielle-macinnes-IuLgi9PWETU-unsplash.jpg', 'alt': 'Some alt'},
                           {'path': 'frontend/img/carousel/florian-klauer-mk7D-4UCfmg-unsplash.jpg', 'alt': 'Some alt'},
                           {'path': 'frontend/img/carousel/freddie-marriage-vSchPA-YA_A-unsplash.jpg', 'alt': 'Some alt'}, ]
        return render(request, self.template_name, {'carousel_images': carousel_images})
