import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { IntersQuestComponent } from './inters-quest/inters-quest.component';
import { IntersQuest2Component } from './inters-quest2/inters-quest2.component';
import { RegisterPage2Component } from './register-page2/register-page2.component';
import { RegisterPage3Component } from './register-page3/register-page3.component';
import { RegisterPage4Component } from './register-page4/register-page4.component';
import { RegistrationFinalComponent } from './registration-final/registration-final.component';

const routes: Routes = [
      {path:'', component: HomeComponent},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent},
      {path: 'register2', component: RegisterPage2Component},
      {path: 'register3', component: RegisterPage3Component},
      {path: 'register4', component: RegisterPage4Component},
      {path: 'register5', component:IntersQuestComponent},
      {path: 'register6', component:IntersQuest2Component},
      {path: 'register7', component:RegistrationFinalComponent}
  ];
  // {path: '', component: SiteLayoutComponent, children:[]}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
