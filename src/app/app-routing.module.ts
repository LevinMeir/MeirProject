import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';

const routes: Routes = [
  // {path:'', component: AppComponent},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
  ];
  // {path: '', component: SiteLayoutComponent, children:[]}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
