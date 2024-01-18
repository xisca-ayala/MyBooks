import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[]= [
    new Book("El día que Nietzsche lloró", "blanda", "Irvin D. Yalom", 19, "/assets/img/imgBooks/Nietzsche.jpeg", 1 ),
    new Book("El monje que vendió su ferrari", "blanda", "Robin Sharma", 11, "/assets/img/imgBooks/monje.jpg", 2),
    new Book("Reina roja", "dura ", "Juan Gómez-Jurado", 21,"/assets/img/imgBooks/reina.jpg", 3 )
  ]; 

  private url = "http://localhost:3000/books"

  constructor(private http: HttpClient) {
    this.books = null; 
   }

  public getAll():Observable<Object>{
    return this.http.get(this.url)
  }

  public getOne(id_book: number):Observable<Object>{
   return this.http.get(this.url, id_book)
  }

  public add(book:Book):Observable<Object>{
    return this.http.post(this.url, book)
  }

  public edit(bookParam: Book):Observable<Object>{
    console.log(bookParam); 
    return this.http.put(this.url, bookParam)
  }

  public delete(id_book: number):Observable<Object>{
    return this.http.delete(this.url, id_book)

  }

public showMessage(message:string){
  alert(message);  
}

}



