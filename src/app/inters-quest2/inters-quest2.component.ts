import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-inters-quest2',
  templateUrl: './inters-quest2.component.html',
  styleUrls: ['./inters-quest2.component.css']
})
export class IntersQuest2Component implements OnInit {public user;
  form: FormGroup
  aSub: Subscription

  constructor(private auth: AuthService, private router: Router) {
    
    this.user = this.auth.user
   }
  

  ngOnInit(): void {

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      name: new FormControl(null, [Validators.minLength(2)])
    })
  }
  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }
  onSubmit() {
    this.auth.user = this.form.value;
    
    this.form.disable()
    this.aSub = this.auth.register().subscribe(
      () => {
        this.router.navigate(['/register2'], {
          queryParams: {
            registered: true
          }
        })
      },
      error => {
        console.warn(error)
        this.form.enable()
      }
    )
  }

}