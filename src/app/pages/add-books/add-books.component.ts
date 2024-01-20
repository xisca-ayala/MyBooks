import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'src/app/models/response';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})

export class AddBooksComponent implements OnInit{

  public message: string; 
  public addForm: FormGroup;

  constructor(public myBooksService: BooksService, private router: Router, private toast: ToastrService, private formBuilder: FormBuilder){
    this.buildForm(); 
  }

  newBook(title: HTMLInputElement, type: HTMLInputElement, author: HTMLInputElement, price: HTMLInputElement, photo: HTMLInputElement, 
  id: HTMLInputElement) {
    if (title.value == "" || type.value == "" || author.value == "" || price.value == "" || photo.value == "" || 
    id.value == ""){
      this.toast.error("Falta un campo obligatorio","", 
      {timeOut: 2000, positionClass: 'toast-top-center'}); 
    } else {
      let newBook: Book = new Book (title.value, type.value, author.value, parseFloat(price.value), photo.value, parseInt(id.value));
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
          price.value = "";
          photo.value = ""; 
          id.value = "";

          this.myBooksService.book = null; 
        } else {
          this.toast.error('El usuario ya existe', "", 
                    {timeOut: 2000, positionClass: 'toast-top-center'});
        } 
      })
    }
  }

  private buildForm(){
    this.addForm = this.formBuilder.group({
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
