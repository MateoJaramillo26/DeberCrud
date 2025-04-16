from django.shortcuts import render
from rest_framework import permissions, viewsets
from .models import Cliente
from .serializers import  ClienteSerializer
from rest_framework.permissions import IsAuthenticated

class ClienteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = [IsAuthenticated]