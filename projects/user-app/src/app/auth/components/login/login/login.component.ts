import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports:[FormsModule]
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        this.authService.storeToken(response.token);
        const decodedToken = this.decodeToken(response.token);

        // Redirect based on role
        if (decodedToken.role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard']);
        } else if (decodedToken.role === 'USER') {
          this.router.navigate(['/user-dashboard']);
        }
      },
      (error) => {
        console.log('Login failed:', error);
      }
    );
  }

  decodeToken(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));
  }
}
