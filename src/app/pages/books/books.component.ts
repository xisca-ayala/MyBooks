import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Response } from 'src/app/models/response';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit{

  public books: Book[]= []; 
  public book: Book; 
  public id: number;
  public even: boolean;
  
  constructor(public myBooksService: BooksService, private toast: ToastrService){
  }

  public getCards(search_id: HTMLInputElement){
    let search_idBook: number = parseFloat (search_id.value);
    if(search_idBook) {
      this.myBooksService.getOne(search_idBook)
      .subscribe((resp: Response)=> {
        console.log(resp);
        if(!resp.err){
          this.books = resp.data;
          this.toast.success('Se ha encontrado el libro', "",
                            {timeOut:2000, positionClass: "toast-top-center"});
        }else{
          this.books = resp.data;
          alert(resp.message);
          this.toast.error('Libro no encontrado', "", 
                    {timeOut: 2000, positionClass: 'toast-top-center'});
        } 
      });
      this.toast.success("Busca un libro","", 
      {timeOut: 2000, positionClass: 'toast-top-center'}); 
    } else {
      this.myBooksService.getAll()
      .subscribe((resp: Response)=> {
        console.log(resp);
        if(!resp.err){
          this.books = resp.data; 
          this.toast.success('Todos los libros', "",
                            {timeOut:2000, positionClass: "toast-top-center"});
        }else{
          this.toast.error('Libros no encontrados', "", 
                    {timeOut: 2000, positionClass: 'toast-top-center'});
        } 
      });
    } 
  }

  public deleteBook (id:number){
    this.myBooksService.delete(id)
    .subscribe((resp: Response)=> {
      console.log(resp); 
      if (!resp.err){
        this.toast.success('Libro eliminado', "",
                            {timeOut:2000, positionClass: "toast-top-center"});
        this.books = resp.data;
      }else{
        this.toast.error('No se ha eliminado ningun libro', "", 
                    {timeOut: 2000, positionClass: 'toast-top-center'});
      }
    })
  }

  ngOnInit(): void{
    this.myBooksService.getAll()
    .subscribe((resp: Response)=> {
      console.log(resp)
      this.books = resp.data; 
    })
  }
}
