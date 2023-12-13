import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  registerUsers: any[] = [];
  registerObj: any={
    userName:'',
    email:'',
    password:''
  };
  
  loginObj: any = {
    userName:'',
    password:''
  }

  password = "";
  userName= "";
  constructor (private httpClient: HttpClient){}
    ngOnInit(): void {

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
          next:response => {console.log('Registration okay')},
          error: (error: HttpErrorResponse) => {console.log(error.error)}
          })
          
      }
}
