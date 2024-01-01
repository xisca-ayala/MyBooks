import { Component, OnInit } from '@angular/core';
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

  deleteCard(id_book: number): void {
    let deleteCard = this.myBooksService.delete(id_book);
    if (deleteCard) {
      this.books = this.myBooksService.getAll();
    }
  }

  ngOnInit(): void {}
  

}

