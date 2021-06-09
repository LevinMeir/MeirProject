import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage2Component } from './register-page2/register-page2.component';
import { RegisterPage3Component } from './register-page3/register-page3.component';
import { RegisterPage4Component } from './register-page4/register-page4.component';
 import { HomeComponent } from './components/home/home.component';
import { IntersQuestComponent } from './inters-quest/inters-quest.component';
import { IntersQuest2Component } from './inters-quest2/inters-quest2.component';
import { RegistrationFinalComponent } from './registration-final/registration-final.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    RegisterPage2Component,
    RegisterPage3Component,
    RegisterPage4Component,
    HomeComponent,
    IntersQuestComponent,
    IntersQuest2Component,
    RegistrationFinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
