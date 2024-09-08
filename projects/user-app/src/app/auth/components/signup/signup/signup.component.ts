import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  standalone:true,
  imports:[FormsModule,RouterLink]
})
export class SignupComponent {
  user = {
    username: '',
    email: '',
    password: '',
    role: 'USER',
    address: {
      street: '',
      city: '',
      state: '',
      postalcode: '',
      country: ''
    }
  };

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    this.authService.signup(this.user).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log('Signup failed:', error);
      }
    );
  }
}
