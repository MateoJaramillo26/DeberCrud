import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  { path: '', component: AppComponent }, // Página principal
  { path: 'login', component: LoginComponent }, // Ruta de login
  { path: '**', redirectTo: '' }, // Redirección en caso de rutas no existentes
];
