import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL base para la API
  private baseUrl = 'http://127.0.0.1:8000/producto/';

  constructor(private http: HttpClient) { }

  // Método para obtener productos
  getProductos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // Método para crear un nuevo producto
  crearProducto(producto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, producto);
  }

  actualizarProducto(id: number, producto: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${id}/`, producto);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }
}
