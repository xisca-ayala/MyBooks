import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'src/app/models/response';


@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})

export class AddBooksComponent implements OnInit{

  public message: string; 

  constructor(public myBooksService: BooksService, private router: Router, private toast: ToastrService){}

  newBook(title:HTMLInputElement, type: HTMLInputElement, author:HTMLInputElement, price:HTMLInputElement, photo:HTMLInputElement, 
    id_book:HTMLInputElement){

      if (title.value == "" || type.value == "" || author.value == "" || price.value == "" || photo.value == "" || 
      id_book.value == ""){
         this.toast.error("Falta un campo obligatorio","", 
        {timeOut: 2000, positionClass: 'toast-top-center'}); 
      }else{
        let priceNumber: number = parseFloat(price.value);
        let newBook: Book = new Book (title.value, type.value, author.value, priceNumber, id_book.value);
        console.log (newBook);

        this.myBooksService.add(newBook)
        .subscribe((resp: Response)=>{

          console.log(resp);

        if(!resp.err){
          this.toast.success('Libro insertado con éxito', "",
                            {timeOut:2000, positionClass: "toast-top-center"});
          title.value = "";
          type.value = "";
          author.value = "";
          price.value =""; 
          id_book.value = "";

          this.myBooksService.book = null; 
        }
        else{
          this.toast.error('El usuario ya existe', "", 
                    {timeOut: 2000, positionClass: 'toast-top-center'});
        } 
      })
    }
  }

  goPlace(){
    this.router.navigate(['/books']);
  }

  ngOnInit(): void {
  }
}
