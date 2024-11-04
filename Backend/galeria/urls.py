# galeria/urls.py
from django.urls import path
from .views import calcular_mmc 

urlpatterns = [
    path('calcular-mmc/', calcular_mmc, name='calcular_mmc'),  # Rota para calcular MMC
]
