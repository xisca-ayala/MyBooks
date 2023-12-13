import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"register", component: RegisterComponent},
  {path:"profile", component: ProfileComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
