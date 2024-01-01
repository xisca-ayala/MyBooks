import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[]= [
    new Book("El día que Nietzsche lloró", "blanda", "Irvin D. Yalom", 19, "/assets/img/imgBooks/Nietzsche.jpeg", 1 ),
    new Book("El monje que vendió su ferrari", "blanda", "Robin Sharma", 11, "/assets/img/imgBooks/monje.jpg", 2),
    new Book("Reina roja", "dura ", "Juan Gómez-Jurado", 21,"/assets/img/imgBooks/reina.jpg", 3 )
  ]; 

  constructor() { }

  public getAll(): Book[]{
    return this.books; 
  }

  public getOne(id_book: number): Book{
    let result: Book;
    this.books.forEach(function (book) {
      if (book.id_book === id_book) {
        result = book;
      }
    });
    if (!result){
      alert("El libro no se ha encontrado. Puebe con otro identificador.")
    }
    return result;
  } 

  public add(book:Book): void{
    this.books.push(book);
  }

  public edit(book: Book): boolean{
    let result: boolean = false;
    this.books.forEach(function(book) {
      if (book.id_book === book.id_book) {
        book.author = book.author;
        book.id_book = book.id_book;
        book.id_user = book.id_user;
        book.photo = book.photo;
        book.price = book.price;
        book.title = book.title;
        book.type = book.type;
        result = true;
      }
    });
    return result;
  }

  public delete(id_book: number): boolean{
    let result: boolean = false;
    this.books.forEach(function(book, i){
      if (book.id_book === id_book) {
        this.books.splice(i, 1);
        result = true;
      }
    });
    return result;
  }

public showMessage(message:string){
  alert(message);  
}

}

let myBooksService = new BooksService(); 


