import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VinylService {

  constructor(private http: HttpClient) { }

  private getToken(): string {
    return localStorage.getItem('authToken') || '';
  }

  private getDecodedToken(): any {
    const token = this.getToken();
    return jwt_decode.jwtDecode(token);
  }

  private getConfig(): any {
    return {
      headers: {
        Authorization: 'Bearer' + this.getToken(),
      },
    };
  }

  async getAllVinyls(): Promise<any> {
    const url = 'http://localhost:8080/api/vinyl/getVinyls';

    try {
      if (!this.getToken()) {
        return Promise.reject('No token found');
      }

      console.log(this.getToken()); // For debugging purposes only
      console.log(this.getConfig()); // For debugging purposes only

      // Make a GET request to the parameterized URL
      return this.http.get(url, this.getConfig()).toPromise();
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
