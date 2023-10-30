import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CommunicationsComponent} from "./patients_communications/communications/communications.component";
import {LoginComponent} from "./login/login.component";
import {CanActivate} from "./auth.guard";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'communications', component: CommunicationsComponent, canActivate:[CanActivate]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
