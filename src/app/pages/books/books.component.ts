import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit{

  public books: Book[] = this.myBooksService.getAll(); 
  public book: Book; 
  public id_book: number;  
  public even: boolean;
  

  constructor(public myBooksService: BooksService){

  }

  public getCards(search_id: number){
    this.id_book = search_id;
    if(search_id) {
      this.books = [this.myBooksService.getOne(search_id)];
      console.log('libros: ' + this.books.length);
    } else {
      this.books = this.myBooksService.getAll();
    }
  }



  ngOnInit(): void{
 
  }
}
