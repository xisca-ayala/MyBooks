import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';


@Pipe({
  name: 'pipeRef'
})
export class PipeRefPipe implements PipeTransform {

  transform(id_books: number): string {
    let result = "Ref-" + id_books ;
    return result;
  }

}
