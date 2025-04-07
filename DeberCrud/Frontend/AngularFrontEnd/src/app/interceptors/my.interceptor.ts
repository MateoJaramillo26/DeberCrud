import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Aquí puedes modificar la solicitud antes de enviarla
    const modifiedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer my-token') // Ejemplo de agregar un header
    });
    
    return next.handle(modifiedRequest);
  }
}
