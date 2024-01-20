import { Component, OnInit, booleanAttribute } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { Response } from 'src/app/models/response';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  
  public books: Book[] =[];
  public updateForm: FormGroup; 
  

  constructor(public myBooksService: BooksService, private router: Router, private toast: ToastrService, private formBuilder: FormBuilder){
    //  this.myBooksService.getAll(); 
    this.buildForm(); 
  }


  editBook(title: HTMLInputElement, type: HTMLInputElement, author: HTMLInputElement, price: HTMLInputElement,
           photo: HTMLInputElement, id: HTMLInputElement){
    let newBook: Book = new Book(title.value, type.value, author.value, parseFloat(price.value), photo.value, parseInt(id.value));
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
    });
  }

  private buildForm(){
    this.updateForm = this.formBuilder.group({
      title: [, Validators.required],
      type: [, Validators.required],
      author: [, Validators.required],
      price: [, Validators.required],
      photo: [, Validators.required],
      id: [, Validators.required]
    })
  }

  goPlace(){
    this.router.navigate(['/books']);
  }

  ngOnInit(): void {
    
  }

}
