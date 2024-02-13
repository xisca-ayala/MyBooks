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
    if(userFormData.email !== this.myUserService.user.email || 
      userFormData.password !== this.myUserService.user.password){
      console.log('Los datos no coinciden')
    }else{
      this.myUserService.logueado = true;
      this.router.navigate(['./books']);
      let user: User = new User ( this.myUserService.user.name, this.myUserService.user.lastName,
       userFormData.email, this.myUserService.user.photo, userFormData.password);
        console.log(user);
     
      console.log('Los datos coinciden');

      this.myUserService.login(user)
      .subscribe((resp: Response)=>{
        console.log(resp);
        if(!resp.err){
          this.toast.success('Usuario logueado con éxito', "",
          {timeOut:2000, positionClass: 'toast-top-center'});
          userFormData.email = "";
          userFormData.value = "";
          this.myUserService.user = null; 
          }else{
            this.toast.error('El usuario no se encuentra', "",
                          {timeOut: 2000, positionClass: 'toast-top-center'});
          }
      })
    }
  }
  

  private buildForm(){
    let minPassLength = 8;

    this.loginForm = this.formBuilder.group({
      // definesc aqui les validacions, no al final de l'input al html, dins l'array hi ha una coma, perque abans de la coma hi ha el valor inicial, com volem que sigui en blanc, hi ha una coma,després un validador, o un array de validadors
      // tambe hi pot haver una validacio inventada per jo: this.nom del metode que faig
      email: [, [Validators.required, Validators.email]],
      password:[, [Validators.required, Validators.minLength(minPassLength)]]
    });


  }


  ngOnInit(): void {
    
  }

}


