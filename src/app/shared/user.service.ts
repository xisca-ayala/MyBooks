import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User; 
  public logueado: boolean = false; 
  private url = "http://localhost:3000/";

  constructor(private http: HttpClient) {
  }

  public add(user: User):Observable<Object>{
    return this.http.post(this.url, user);
  }

  public login(user: User):Observable<Object>{
    return this.http.post(this.url, user);
  }

}


