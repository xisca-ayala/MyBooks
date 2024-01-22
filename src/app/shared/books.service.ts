import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public books: Book[]; 
  public book: Book; 

  private url = "http://localhost:3000/books";

  constructor(private http: HttpClient) {
  }

  public getAll():Observable<Object>{
    return this.http.get(this.url);
  }

  public getOne(id: number):Observable<Object>{
   return this.http.get(this.url + '?id=' + id);
  }

  public add(book:Book):Observable<Object>{
    return this.http.post(this.url, book);
  }

  public edit(book: Book):Observable<Object>{
    return this.http.put(this.url, book);
  }

  public delete(id: number):Observable<Object>{
    // return this.http.delete(this.url + '?id=' + id);
    return this.http.delete(this.url);
  }

public showMessage(message:string){
  alert(message);  
}

}



