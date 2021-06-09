import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form: FormGroup
  aSub: Subscription
  constructor(private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      name: new FormControl(null, [Validators.minLength(2)])
    })

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        // you registered!!!
      } else if (params['accessDenied']) {
        // register first
      }
    })
  }
  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }
  onSubmit() {
    this.form.disable()
    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
      name:this.form.value.name

    }
    this.aSub = this.auth.login(user).subscribe(
      () => 
      //console.log('Login success')
      this.router.navigate(['/overview'])
      ,
      error => {
        console.warn(error)
        this.form.enable()
      }
    )
  }
}