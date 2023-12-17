import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';




@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit{

  books: Book[];

  constructor(){

    this.books = [
      new Book("El día que Nietzsche lloró", "blanda", "Irvin D. Yalom", 19, "/assets/img/imgBooks/Nietzsche.jpeg", 111 ),
      new Book("El monje que vendió su ferrari", "blanda", "Robin Sharma", 11, "/assets/img/imgBooks/monje.jpg", 112),
      new Book("Reina roja", "dura ", "Juan Gómez-Jurado", 21,"/assets/img/imgBooks/reina.jpg", 113 ),

    ];
  }

  sendInfo(newTitle:string, newAuthor:string, newType:string, newPrice:number, newPhoto:string, newId_card:number){
    let newBook = new Book(newTitle, newType, newAuthor, newPrice, newPhoto, newId_card);

    this.books.push(newBook); 

  }


  ngOnInit(): void{
  }
}
