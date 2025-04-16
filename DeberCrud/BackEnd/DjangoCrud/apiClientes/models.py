from django.db import models
from django.contrib.auth.hashers import make_password, check_password

# Create your models here.
class Cliente (models.Model):
    nombre = models.CharField(max_length= 100, verbose_name="Nombre del Cliente")
    apellido = models.CharField(max_length=100, verbose_name="Apellido del Cliente")
    telefono = models.CharField(max_length=10, null= False, unique= True, verbose_name="Telefono del Cliente")
    correo = models.EmailField(verbose_name="Correo del Cliente", null=False, unique=True)
    contrasenia = models.CharField(max_length=32, verbose_name="Contraseña")
    created = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de Ingreso")
    updated = models.DateTimeField(auto_now=True, verbose_name="Fecha de Modificacion")

    def save(self, *args, **kwargs):
        if not self.pk or not check_password(self.contrasenia, self.contrasenia):
            self.contrasenia = make_password(self.contrasenia)
        super().save(*args, **kwargs)