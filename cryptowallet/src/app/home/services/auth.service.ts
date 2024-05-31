import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import AuthData from '../models/auth-data.model';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createUser(authData: AuthData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/auth/signup`, authData)
  }

  loginUser(authData: AuthData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/auth/login`, authData)
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
