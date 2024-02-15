import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  public user: User;
  public message: string;
  public isHidden: boolean;
  public profileForm: FormGroup; 
  public myColor: string; 


  constructor(public myUserService: UserService, 
              private formBuilder: FormBuilder, 
              private router: Router, 
              private toast: ToastrService){
    // this.user1 = new User("Ana","García Pinya","ana@gmail.com", "/assets/img/imgProfile/person.jpg");

    this.message = ''; 
    this.isHidden = true; 
    this.myColor = '#ff0000'; 
  }


  updateUser(newName:string, newLastName: string, newEmail:string, newPhoto:string){

    if(newName){
      newName = this.user.name;
    }
    if(newLastName){
      newLastName = this.user.last_name;
    }
    if(newEmail){
      newEmail = this.user.email;
    }
    if(newPhoto){
      newPhoto = this.user.photo; 
    }

    if (newName || newLastName || newEmail || newPhoto){
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

  ngOnInit(): void {
  }

}

