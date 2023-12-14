import { Component } from '@angular/core';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  public user1: User;

  constructor(){
    this.user1 = new User("Ana","García Pinya","ana@gmail.com", "/assets/img/imgProfile/person.jpg")
  }

  send(newName:string){
    this.user1.name =newName;
    console.log(this.user1.name); 
    
  }

  showData(){

  }
 
  updateImg(){
    let img1="/assets/img/imgProfile/person.jpg";
  }

}

