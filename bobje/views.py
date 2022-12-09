from django.shortcuts import render
from .models import Product


def index(request):
    products = Product.objects.all()
    return render(request, 'index.html', {'products': products})

def eng(request):
    products = Product.objects.all()
    return render(request, 'eng.html', {'products': products})

def support(request):
    return render(request, 'support-us.html')

def supporteng(request):
    return render(request, 'support-eng.html')