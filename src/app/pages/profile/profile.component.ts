import { Component } from '@angular/core';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  public user1: User;
  public message: string;
  public isHidden: boolean;
  public myColor: string; 


  constructor(){
    // this.user1 = new User("Ana","García Pinya","ana@gmail.com", "/assets/img/imgProfile/person.jpg");

    this.message = ''; 
    this.isHidden = true; 
    this.myColor = '#ff0000';
  }


  send(newName:string, newLastName: string, newEmail:string, newUrl:string){

    if(newName){
      this.user1.name = newName;
    }
    if(newLastName){
      this.user1.lastName = newLastName;
    }
    // if(newLastName){
    //   this.user1.email = newEmail;
    // }
    // if(newLastName){
    //   this.user1.url = newUrl; 
    // }

    console.log(this.user1.name);

    if (newName || newLastName || newEmail || newUrl){
      this.message = 'Usuario Actualizado'; 
      this.isHidden = false; 
      this.myColor = '#008000'
    }else{
      this.message = 'No se han detectado cambios'
      this.isHidden = false;
      this.myColor; 
    }

  }

  updateImg(){
    let img1="/assets/img/imgProfile/person.jpg";
  }
}

