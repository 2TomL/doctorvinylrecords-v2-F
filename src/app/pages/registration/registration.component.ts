import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
  constructor(private router: Router, private authService: AuthService, private httpClient: HttpClient){

  }
 register() {
  const url = 'http://localhost:8080//api/auth/register'
    // Create a request object
    const loginRequest = {
      username: this.username,
      password: this.password,
      email: this.email
    };

    // Make a POST request to the register endpoint
    this.httpClient.post(url, loginRequest ).subscribe({
      next:response => {console.log('Registration okay')},
      error: (error: HttpErrorResponse) => {console.log(error.error)}
      })
  }
}
