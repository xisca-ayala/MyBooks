import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  public books: Book[] = this.myBooksService.getAll();

  constructor(public myBooksService: BooksService){ 
    
  }


  ngOnInit(): void {
  
  }
}
