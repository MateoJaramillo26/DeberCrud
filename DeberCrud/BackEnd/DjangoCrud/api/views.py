from django.shortcuts import render
from rest_framework import permissions, viewsets
from .models import Producto
from .serializers import  ProductoSerializer


class ProductoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    