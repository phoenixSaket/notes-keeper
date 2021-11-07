import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getLoginData(loginData: any): Observable<any> {
    return this.http.post("http://localhost:8000/api/login", { email: loginData.email, password: loginData.password });
  }
}
