from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import math
from functools import reduce

def mmc(a, b):
    return abs(a * b) // math.gcd(a, b)

@require_http_methods(["GET"])  # Permite apenas requisições GET
def calcular_mmc(request):
    x = request.GET.get('x')  # Obtém o parâmetro x da requisição
    y = request.GET.get('y')  # Obtém o parâmetro y da requisição

    # Verifica se os parâmetros x e y foram fornecidos
    if x is None or y is None:
        return JsonResponse({'error': 'Os parâmetros x e y são obrigatórios.'}, status=400)

    # Valida se os parâmetros são números e converte-os
    try:
        x = int(x)
        y = int(y)
        if x < 1 or y < 1:
            raise ValueError  # exceção se os valores forem menores que 1
    except ValueError:
        return JsonResponse({'error': 'Os parâmetros x e y devem ser números inteiros positivos.'}, status=400)

    # Calcula o MMC de todos os números no intervalo
    result = reduce(mmc, range(x, y + 1))

    #  lista de divisões com os números dentro do intervalo x a y
    divisoes = [f'{result} / {i} = {result / i} (Divisível)' for i in range(x, y + 1)]
    
    return JsonResponse({'resultado': result, 'divisoes': divisoes})
