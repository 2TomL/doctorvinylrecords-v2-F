import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  userName: string = '';
  password: string = '';
  constructor(private httpClient: HttpClient, private router: Router){

  }

    login() {
     
      const url = 'http://localhost:8080/api/auth/login'
        // Create a request object
        const loginRequest = {
          username: this.userName,
          password: this.password,
        };
    
        console.log(loginRequest)
    
        // Make a POST request to the register endpoint
        this.httpClient.post(url, loginRequest ).subscribe({
          next:(response:any) => {
            const token = response.token
            const role = response.roles
            localStorage.setItem("token", token)  
            localStorage.setItem("role", role) 
                  
            console.log('Login okay', response)
            this.router.navigate(['/vinyl'])
              },
          error: (error: HttpErrorResponse) => {console.log(error.error)}
          })
          
      }
}
