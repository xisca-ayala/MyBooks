import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})

export class AddBooksComponent implements OnInit{

  constructor(public myBooksService: BooksService, private router: Router){}

  newBook(title:string, type: string, author:string, price:number, photo:string, id_book:number, id_user:number){
    this.myBooksService.add(new Book (title, type, author, price, photo, id_book, id_user));
  }

  goPlace(){
    this.router.navigate(['/books']);
  }

  ngOnInit(): void {
    
  }
}
