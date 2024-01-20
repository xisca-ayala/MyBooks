import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit{

  public books: Book[];
  @Input() even:boolean; 
  @Input() book:Book;
  @Output() deleteChildCard = new EventEmitter<number>(); 

  constructor(public myBooksService: BooksService){ 
  }

  deleteCard(id: number): void {
    this.deleteChildCard.emit(id); 
  }

  ngOnInit(): void {}
  
}

