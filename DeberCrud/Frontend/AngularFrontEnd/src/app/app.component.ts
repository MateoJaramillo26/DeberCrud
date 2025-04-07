import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  productos: any[] = [];
  productoSeleccionado: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.apiService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (error) => {
        console.error('Error al obtener productos', error);
      },
    });
  }

  agregarProducto(): void {
    this.productoSeleccionado = { titulo: '', descripcion: '', precio: 0 };
  }

  editarProducto(producto: any): void {
    this.productoSeleccionado = { ...producto }; // Clonar para evitar modificar directamente
  }

  guardarProducto(): void {
    if (this.productoSeleccionado.id) {
      // Actualizar producto existente
      this.apiService
        .actualizarProducto(this.productoSeleccionado.id, this.productoSeleccionado)
        .subscribe(() => {
          this.obtenerProductos();
          this.cancelarEdicion();
        });
    } else {
      // Crear nuevo producto
      this.apiService.crearProducto(this.productoSeleccionado).subscribe(() => {
        this.obtenerProductos();
        this.cancelarEdicion();
      });
    }
  }

  eliminarProducto(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.apiService.eliminarProducto(id).subscribe(() => {
        this.obtenerProductos();
      });
    }
  }

  cancelarEdicion(): void {
    this.productoSeleccionado = null;
  }
}
