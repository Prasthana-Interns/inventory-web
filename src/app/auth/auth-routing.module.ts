import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
                        {path:'',redirectTo:"/login",pathMatch:'full'},
                        {path:'login',component:LoginComponent},
                        {path:'reset',component:ResetPasswordComponent},                
                       ];
                       
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
