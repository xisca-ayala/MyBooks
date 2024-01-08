import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  public registerForm: FormGroup;


constructor(private formBuilder: FormBuilder){
  this.buildForm();

}


ngOnInit(): void {

}  

public register(){
  let user = this.registerForm.value; 
  console.log(user);
}

private buildForm(){

  let minLength: number = 8; 

  this.registerForm = this.formBuilder.group({
    name: [, Validators.required],
    secondName: [, Validators.required],
    email: [, [Validators.required, Validators.email]],
    url: [, Validators.required],
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

