import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit{

  constructor(private myService: BooksService){}

  // addBook(){
  //   let myBook = new Book(this.title, this.type, this.)

  // }

  // this.myService.add()
  ngOnInit(): void {
    
  }
}
