import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent implements OnInit {
  public loginForm: FormGroup; 
  constructor (private formBuilder: FormBuilder){
    this.buildForm(); 
  }



  ngOnInit(): void {
    
  }

  onSubmit():void{
    console.log('hola')
  }

  public register(){
    let user = this.loginForm.value;
    console.log(user); 
  }

  private buildForm(){
    let minPassLength = 8;

    this.loginForm = this.formBuilder.group({
      email: [, [Validators.required, Validators.email]],
      password:[, [Validators.required, Validators.minLength(minPassLength)]]
    });

  }
}
