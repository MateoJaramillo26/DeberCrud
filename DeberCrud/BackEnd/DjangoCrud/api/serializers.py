from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Producto

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ['id','titulo', 'descripcion', 'precio', 'created', 'updated']
