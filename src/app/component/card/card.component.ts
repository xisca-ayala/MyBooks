import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() bookPadre: Book;

  constructor(){ 


  }
  ngOnInit(): void {
  }
}
