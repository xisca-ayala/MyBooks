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
    let addUserUrl = this.url + 'register';
    return this.http.post(addUserUrl, user);
  }

  public login(user: User):Observable<Object>{
    let loginUserUrl = this.url + 'login';
    return this.http.post(loginUserUrl, user);
  }

}


