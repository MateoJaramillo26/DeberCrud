from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Producto

class ProductoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Producto
        fields = ['id','titulo', 'descripcion', 'created', 'updated']
