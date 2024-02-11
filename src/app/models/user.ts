export class User {
    public Id_user: string;
    public password:string;
    
    constructor(public name: string,
                public lastName: string,
                public email: string,
                public photo: string, 
                public url: string){}
    
    
}
