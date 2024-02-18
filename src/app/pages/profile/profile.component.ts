import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Response } from 'src/app/models/response';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  public user: User;
  public profileForm: FormGroup; 

  constructor(public myUserService: UserService, 
              private router: Router, 
              private toast: ToastrService){
    this.user = this.myUserService.user;
  }

  updateUser(newName:string, newLastName: string, newEmail:string, newPhoto:string){
    if(newName){
      this.user.name = newName;
    }
    if(newLastName){
      this.user.last_name = newLastName;
    }
    if(newEmail){
      this.user.email = newEmail;
    }
    if(newPhoto){
      this.user.photo = newPhoto; 
    }

    this.myUserService.update(this.user)
    .subscribe((resp: Response)=>{
      if(!resp.err){
        this.toast.success("Usuario insertado con éxito","", 
          {timeOut: 2000, positionClass: 'toast-top-center'});
      }else{
        this.toast.error("El usuario ya existe","", 
          {timeOut: 2000, positionClass: 'toast-top-center'});
      }
    }) 
  }

  logout(){
    this.router.navigate(['login']);
    this.myUserService.logueado = false;
    this.myUserService.user = null;
  }

  updateImg(){
    let img1="/assets/img/imgProfile/person.jpg";
  }

  ngOnInit(): void {
    if(this.myUserService.logueado == false || !this.myUserService.user){
      this.router.navigate(['login']);
    }
  }

}

