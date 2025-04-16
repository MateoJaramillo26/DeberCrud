import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, Routes, RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './app/interceptors/my.interceptor'; 
import { AuthInterceptor } from './app/auth.interceptor';

bootstrapApplication(AppComponent, {
  providers: [// Proveedor de rutas
    provideHttpClient(withInterceptorsFromDi()), 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor, 
      multi: true              
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, 
      multi: true              
    }
  ]
});
