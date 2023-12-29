import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public books: Book[]= [
    new Book("El día que Nietzsche lloró", "blanda", "Irvin D. Yalom", 19, "/assets/img/imgBooks/Nietzsche.jpeg", 111 ),
    new Book("El monje que vendió su ferrari", "blanda", "Robin Sharma", 11, "/assets/img/imgBooks/monje.jpg", 112),
    new Book("Reina roja", "dura ", "Juan Gómez-Jurado", 21,"/assets/img/imgBooks/reina.jpg", 113 )
  ]; 

  constructor() { }

  public getAll(): Book[]{
    return this.books; 
  }

  public getOne(id_books:number):Book{
    for(let i=0; i<this.books.length; i++){
      if (this.books[i].id_books === id_books){
        return this.books[i]; 
      } 
    }
  }

  public add(book:Book): void{
    this.books.push(book);
  }

  // public edit(book:Book):boolean{
  //   for(let i=0; i<this.books.Book.length; i++){
  //     let newInfo =this.
  //     if (this.books[i] === book){

  //       return true; 
  //     }else{
  //       return false;
  //     }
  //   }

  // }

  // public delete(id_books:number):boolean{
  //   for(let i=0; i<this.books.length; i++){
  //     if (this.books[i].id_books === id_books){
  //       this.books.splice(i, 1); 
  //       return true; 
  //     } else{
  //       return false;
  //     }
  //   }
  // }
}

let myBooksService = new BooksService(); 


