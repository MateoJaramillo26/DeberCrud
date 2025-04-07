from django.db import models

# Create your models here.
class Producto(models.Model):
    titulo = models.CharField(max_length= 100, verbose_name="Nombre del Producto")
    descripcion = models.CharField(max_length=256, verbose_name= "Descripcion")
    created = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de Ingreso")
    updated = models.DateTimeField(auto_now=True, verbose_name="Fecha de Modificacion")
    
    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"
        ordering = ["-created"]
    
    def __str__(self):
        return self.titulo