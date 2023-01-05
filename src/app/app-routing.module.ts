import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { OpenComponent } from './open/open.component';
import { RegisterComponent } from './register/register.component';
import { WebComponent } from './pagenotfound/web.component';




const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent,
  children:[
    // { path: '', pathMatch: 'full', redirectTo: 'info' },
  {path:"info",component:InfoComponent}]},

  { path: '', pathMatch: 'full', redirectTo: 'open' },
   {path:"open",component:OpenComponent},
 {path:"register",component:RegisterComponent},
{path:"**",component:WebComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
