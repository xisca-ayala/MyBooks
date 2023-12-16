export class Book {

    constructor(
        public title: string,
        public type: string,
        public author: string, 
        public price: number,
        public photo: string,
        public id_books?:number,
        public id_user?: number ){

        this.id_books = 0;
        this.id_user = 0;    

        }  
}
