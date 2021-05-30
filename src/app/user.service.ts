import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/import/userData";
  constructor(private http:HttpClient) { }

  getUsers(user : User): Observable<User[]> {
    alert(user.briefId);
     return this.http.post<User[]>(`${this.baseUrl}`, user);
  }
} 
