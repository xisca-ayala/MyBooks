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
    // buildform() es un metode que jo m'he creat
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
      // definesc aqui les validacions, no al final de l'input al html, dins l'array hi ha una coma, perque abans de la coma hi ha el valor inicial, com volem que sigui en blanc, hi ha una coma,després un validador, o un array de validadors
      // tambe hi pot haver una validacio inventada per jo: this.nom del metode que faig
      email: [, [Validators.required, Validators.email]],
      password:[, [Validators.required, Validators.minLength(minPassLength)]]
    });

    console.log(this.loginForm.value)

  }
}
