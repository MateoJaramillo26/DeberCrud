import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Agregar FormsModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response: any) => {
        this.authService.storeTokens(response.access, response.refresh);
        this.router.navigate(['/']); // Redirigir al home o ruta protegida
      },
      error: () => {
        alert('Credenciales incorrectas. Por favor intenta de nuevo.');
      },
    });
  }
}
