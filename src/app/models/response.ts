import { Book } from "./book";

export class Response {
    constructor(public err: boolean,
                public code: number, 
                public missage: string, 
                public data: Book){}
}
