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
  public book:Book; 


  even: boolean;

  constructor(public myBooksService: BooksService){

  }
  

  ngOnInit(): void{
 
  }
}
