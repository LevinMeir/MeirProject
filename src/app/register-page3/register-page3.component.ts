import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../interfaces';

@Component({
  selector: 'app-register-page3',
  templateUrl: './register-page3.component.html',
  styleUrls: ['./register-page3.component.css']
})
export class RegisterPage3Component implements OnInit {
  user:User;

  constructor(private auth:AuthService) {
    this.user = this.auth.user;
  }

  ngOnInit(): void {
  }

}
