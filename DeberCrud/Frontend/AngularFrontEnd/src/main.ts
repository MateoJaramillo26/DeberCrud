import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './app/interceptors/my.interceptor'; // Ruta al interceptor

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Configura HttpClient
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor, // Clase del interceptor
      multi: true              // Permite usar múltiples interceptores
    }
  ]
});
