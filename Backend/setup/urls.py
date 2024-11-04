# seu_projeto/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('galeria/', include('galeria.urls')),  # Inclua as URLs do aplicativo
]
