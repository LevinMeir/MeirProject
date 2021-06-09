import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../interfaces';


@Component({
  selector: 'app-register-page2',
  templateUrl: './register-page2.component.html',
  styleUrls: ['./register-page2.component.css']
})
export class RegisterPage2Component implements OnInit {
  user:User
 

  constructor(private auth: AuthService){
    this.user = this.auth.user;
  }
 
  ngOnInit(): void {
  }
  

}
