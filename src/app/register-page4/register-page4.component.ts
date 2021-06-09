import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../interfaces';

@Component({
  selector: 'app-register-page4',
  templateUrl: './register-page4.component.html',
  styleUrls: ['./register-page4.component.css']
})
export class RegisterPage4Component implements OnInit {
user:User
  constructor(private auth:AuthService) { 
    this.user = this.auth.user;
  }

  ngOnInit(): void {
  }

}
