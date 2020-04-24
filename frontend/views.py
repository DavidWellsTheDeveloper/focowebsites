from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from api.models import Nav
from .forms import ContactForm
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
# from focowebsites.settings import EMAIL_HOST_USER


# Create your views here.

from rest_framework import routers


def get_nav():
    nav_pages = Nav.objects.all()
    return nav_pages


class HomeView(TemplateView):
    template_name = "frontend/index.html"

    def get(self, request):
        # form = InputDataForm()
        carousel_images = [{'path': 'frontend/img/carousel/andreas-klassen-gZB-i-dA6ns-unsplash.jpg', 'alt': 'Some alt', 'active': 'active'},
                           {'path': 'frontend/img/carousel/christina-wocintechchat-com-9-ohfp-Dicg-unsplash.jpg', 'alt': 'Some alt'},
                           {'path': 'frontend/img/carousel/danielle-macinnes-IuLgi9PWETU-unsplash.jpg', 'alt': 'Some alt'},
                           {'path': 'frontend/img/carousel/florian-klauer-mk7D-4UCfmg-unsplash.jpg', 'alt': 'Some alt'},
                           {'path': 'frontend/img/carousel/freddie-marriage-vSchPA-YA_A-unsplash.jpg', 'alt': 'Some alt'}, ]
        return render(
            request,
            self.template_name,
            {
                'carousel_images': carousel_images,
                'active': 'Home',
                'nav_pages': get_nav(),
                'form': ContactForm,
            }
        )

    def post(self, request):
        print("In Post\n\n")
        form = ContactForm(request.POST)
        if form.is_valid():
            subject = form.cleaned_data['subject']
            from_email = form.cleaned_data['from_email']
            message = form.cleaned_data['message']
            try:
                send_mail(subject, message, 'dave1.t.wells@gmail.com', ['dave1.t.wells@gmail.com'], fail_silently=False)
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return redirect('home')
        return render(request, "email.html", {'form': form})


class AboutView(TemplateView):
    template_name = "frontend/about.html"

    def get(self, request):
        print(get_nav().first().fa_icon)
        return render(
            request,
            self.template_name,
            {
                'active': 'About',
                'nav_pages': get_nav(),
            }
        )


class ConstructionView(TemplateView):
    template_name = "frontend/construction.html"

    def get(self, request):
        # form = InputDataForm()
        return render(
            request,
            self.template_name,
            {
                'active': 'Construction',
                'nav_pages': get_nav(),
            }
        )


def successView(request):
    return HttpResponse('Success! Thank you for your message.')