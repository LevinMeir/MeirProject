import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';

const routes: Routes = [
  {path:'', component: AuthLayoutComponent, children:
    [{path:'', redirectTo: 'register', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
   {path: 'register', component: RegisterPageComponent}]
  }];
  // {path: '', component: SiteLayoutComponent, children:[]}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
