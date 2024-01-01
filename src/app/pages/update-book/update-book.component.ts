import { Component, OnInit, booleanAttribute } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {


  constructor(public myBooksService: BooksService, private router: Router){
  }

  editBook(title:string, type:string, author:string, price:number, photo:string, id_book:number){
  this.myBooksService.edit(new Book(title,type,author,price,photo,id_book));
  }

  goPlace(){
    this.router.navigate(['/books']);
  }

  ngOnInit(): void {
    
  }

}
