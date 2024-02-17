import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'src/app/models/response';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent implements OnInit {
  public user: User; 
  public loginForm: FormGroup; 

  constructor (public myUserService: UserService, private formBuilder: FormBuilder,
              private router: Router, private toast: ToastrService){
    this.buildForm(); 
  }

  public login(){
    let userFormData = this.loginForm.value; 

    let user: User = new User (null,
                              null,
                              userFormData.email, 
                              null, 
                              userFormData.password);

    this.myUserService.login(user)
    .subscribe((resp: Response)=>{
      if(!resp.err){
        this.toast.success('Usuario logueado con éxito', "",
        {timeOut:2000, positionClass: 'toast-top-center'});
        this.loginForm.reset({'email': '', 'password': ''});
        this.myUserService.logueado = true;
        user = resp.data;
        this.myUserService.user = user; 
        this.router.navigate(['books']);
      }else{
        this.toast.error('El usuario no se encuentra', "",
                      {timeOut: 2000, positionClass: 'toast-top-center'});
      }
    })
  }

  private buildForm(){
    let minPassLength = 8;

    this.loginForm = this.formBuilder.group({
      email: [, [Validators.required, Validators.email]],
      password:[, [Validators.required, Validators.minLength(minPassLength)]]
    });
  }

  ngOnInit(): void {
  }

}


