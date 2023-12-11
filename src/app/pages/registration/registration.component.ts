import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { AuthService } from '../../security/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  constructor(private router: Router, private authService: AuthService){

  }
 register() {
    // Create a request object
    const loginRequest = {
      username: this.username,
      password: this.password,
      email: this.email
    };

    // Make a POST request to the register endpoint
    axios.post('http://localhost:4200/api/auth/registration', loginRequest, {
      headers: {
        'Content-Type': 'application/json' 
      }
    }).then(response => {  
      console.log('Registration successful:', response);

      alert('Registration successful, please login');

      this.router.navigate(['/login']);

    }).catch(error => {
      console.error('Registration error:', error);
      alert('Registration failed, check the console for details');
    });
  }
}
