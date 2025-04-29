"""
URL configuration for myapp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path ('o-mnie/', views.o_mnie, name='o_mnie'),
    path ('konsultacje/', views.konsultacje, name='konsultacje'),
    path ('kontakt/', views.kontakt, name='kontakt'),
    path ('porady/', views.porady, name = 'porady'),
    path ('quiz/', views.quiz, name = 'quiz'),
    path ('szkolenia/', views.szkolenia, name = 'szkolenia'),
    path ('galeria/', views.galeria, name='galeria'),
    path('blog/', include('blog.urls')),
]

