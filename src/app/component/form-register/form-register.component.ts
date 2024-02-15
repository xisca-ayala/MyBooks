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

  constructor(public myUserService: UserService, private formBuilder: FormBuilder,
             private router: Router, private toast: ToastrService){
    this.buildForm();
  }

  public register(){
    let registerData = this.registerForm.value; 
    console.log(registerData);

    if(registerData.name == "" || registerData.last_name == "" || registerData.email == ""
      || registerData.photo == "" || registerData.password == ""|| registerData.confirmPassword == ""){
        this.toast.error('Falta un campo obligatorio', "",
        {timeOut: 2000, positionClass: 'toast-top-center'});
      }else{
        if (registerData.password !== registerData.confirmPassword){
          this.toast.error('Las contraseñas no coinciden', "",
          {timeOut: 2000, positionClass: 'toast-top-center'});
        }else{
          let newUser: User = new User (registerData.name, registerData.last_name,
          registerData.email, registerData.photo, registerData.password);
          console.log(newUser);

          this.myUserService.add(newUser)
          .subscribe((resp: Response)=>{
            console.log(resp); 
            if(!resp.err){
              this.toast.success('Usuario insertado con éxito', "",
              {timeOut:2000, positionClass: 'toast-top-center'});
              registerData.name = "";
              registerData.last_name = "";
              registerData.email = "";
              registerData.photo = "";
              registerData.password = "";
              this.myUserService.user = null; 
              }else{
                this.toast.error('El usuario ya existe', "",
                              {timeOut: 2000, positionClass: 'toast-top-center'});
              }
          })
        }        
      }  
  }

  ngOnInit(): void {
  }  

  private buildForm(){

    let minLength: number = 8; 
    this.registerForm = this.formBuilder.group({
      name: [, Validators.required],
      last_name: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      photo: [, Validators.required],
      password: [, [Validators.required, Validators.minLength(minLength)]],
      repeatPassword: [, [Validators.required, Validators.minLength(minLength), this.checkPassword]]
    })
  }

  private checkPassword(control: AbstractControl){
    let result = {matchPassword: true};
    if (control.parent?.value.password == control.value)
    result = null; 
    return result; 
  }
}


