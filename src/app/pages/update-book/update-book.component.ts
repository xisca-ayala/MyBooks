import { Component, OnInit, booleanAttribute } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { Response } from 'src/app/models/response';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  
  public books: Book[] =[];
  

  constructor(public myBooksService: BooksService, private router: Router, private toast: ToastrService){
     this.myBooksService.getAll(); 
  }


  editBook(title:HTMLInputElement, type:HTMLInputElement, author:HTMLInputElement, price:HTMLInputElement,
           photo:HTMLInputElement, id:HTMLInputElement){
            let priceNumber: number = parseFloat(price.value);
            let idBook: number = parseFloat(id.value); 
            let newBook: Book = new Book(title.value, type.value, author.value, priceNumber, photo.value, idBook);
            this.myBooksService.edit(newBook)
            .subscribe((resp: Response)=> {
              console.log(resp);
              if(!resp.err){
                this.toast.success('Libro modificado con éxito', "",
                                  {timeOut:2000, positionClass: "toast-top-center"});
              }
              else{
                this.toast.error('No hay modificaciones', "", 
                          {timeOut: 2000, positionClass: 'toast-top-center'});
              } 
            })
  }

  goPlace(){
    this.router.navigate(['/books']);
  }

  ngOnInit(): void {
    
  }

}
