import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const credentials = { username: this.username, password: this.password };
    this.http.post('http://localhost:8000/api/token/', credentials).subscribe({
      next: (response: any) => {
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
        this.router.navigate(['/']);
      },
      error: () => {
        alert('Login failed. Please check your credentials.');
      },
    });
  }
}
