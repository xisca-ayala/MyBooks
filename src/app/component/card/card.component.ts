import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() bookPadre: Book[]; 
  
  // deleteCard():{

  // books.splices(this.bookPadre); 

  constructor(){ 
  }

  ngOnInit(): void {
     console.log(this.bookPadre);
  }
}
