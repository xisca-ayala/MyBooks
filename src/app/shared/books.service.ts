import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[]; 

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
