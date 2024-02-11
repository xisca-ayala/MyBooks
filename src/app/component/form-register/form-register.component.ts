import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'src/app/models/response';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})

export class FormRegisterComponent implements OnInit {
  public user: User; 
  public registerForm: FormGroup;
  public message: string; 

  constructor(public myUserService: UserService, private formBuilder: FormBuilder,
             private router: Router, private toast: ToastrService){
    this.buildForm();
  }

  public postUser(name: HTMLInputElement, last_name: HTMLInputElement,
                  email: HTMLInputElement, photo:HTMLInputElement,
                  password: HTMLInputElement){

    if(name.value == "" || last_name.value == "" || email.value == ""
      || photo.value == "" || password.value == ""){
        this.toast.error('Falta un campo obligatorio', "",
        {timeOut: 2000, positionClass: 'toast-top-center'});
      }else{
        let newUser: User = new User (name.value, last_name.value,
          email.value, photo.value, password.value);
          console.log(newUser);
        
        this.myUserService.add(newUser)
        .subscribe((resp: Response)=>{
          console.log(resp); 
        if(!resp.err){
          this.toast.success('Usuario insertado con éxito', "",
          {timeOut:2000, positionClass: 'toast-top-center'});
          name.value = "";
          last_name.value = "";
          email.value = "";
          photo.value = "";
          password.value = "";
          this.myUserService.user = null; 
          }else{
            this.toast.error('El usuario ya existe', "",
                          {timeOut: 2000, positionClass: 'toast-top-center'});
          }
        })
      }
    }

  ngOnInit(): void {

  }  

  public register(){
    let user = this.registerForm.value; 
    console.log(user);
  }

  private buildForm(){

    let minLength: number = 8; 

    // this.registerForm = this.formBuilder.group({
    //   name: [, Validators.required],
    //   secondName: [, Validators.required],
    //   email: [, [Validators.required, Validators.email]],
    //   url: [, Validators.required],
    //   password: [, [Validators.required, Validators.minLength(minLength)]],
    //   repeatPassword: [, [Validators.required, Validators.minLength, this.checkPassword]]
    // })

    this.registerForm = this.formBuilder.group({
      name: [, Validators.required],
      last_name: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      photo: [, Validators.required],
      password: [, [Validators.required, Validators.minLength(minLength)]],
      repeatPassword: [, [Validators.required, Validators.minLength, this.checkPassword]]
    })
  }

  private checkPassword(control: AbstractControl){
    let result = {matchPassword: true};
    if (control.parent?.value.password == control.value)
    result = null; 
    return result; 
  }
}


