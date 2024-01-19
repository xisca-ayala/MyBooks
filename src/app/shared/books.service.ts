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

  private url = "http://localhost:3000/books"

  constructor(private http: HttpClient) {
    this.books = null; 
   }

  public getAll():Observable<Object>{
    return this.http.get(this.url)
  }

  public getOne(id_book: number):Observable<Object>{
   return this.http.get(`${this.url}/${id_book}`)
  }

  public add(book:Book):Observable<Object>{
    return this.http.post(this.url, book)
  }

  public edit(bookParam: Book):Observable<Object>{
    console.log(bookParam); 
    return this.http.put(this.url, bookParam)
  }

  public delete(id_book: number):Observable<Object>{
    return this.http.delete(`${this.url}/${id_book}`)

  }

public showMessage(message:string){
  alert(message);  
}

}



