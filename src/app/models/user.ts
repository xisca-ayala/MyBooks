export class User {
    public idUser: number;
    public password:string;
    
    constructor(public name: string,
                public lastName: string,
                public email: string,
                public photo: string, 
                password: string){}
    
    
}
