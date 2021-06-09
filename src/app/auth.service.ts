import { Injectable } from '@angular/core';
import { User } from './interfaces';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  show=true; // я пытался сделать чтобы картинка не показывалась всегда

  private token = null;
  login(user: User): Observable<{token: string}>
  {
    return this.http.post<{token: string}>('http://localhost:5000/api/auth/login', user)
    .pipe(
      tap(
        ({token})=>{localStorage.setItem('auth-token', token)
      this.setToken(token)
      }
      )
    )
  }
  setToken(token:string){
    this.token = token
  }
  getToken():string
  {
    return this.token
  }

  isAuthenticated():boolean
  {
    return !!this.token
  }

  logOut()
  {
    this.setToken(null)
    localStorage.clear()
  }
  // Impotant function
  register(): Observable<User>{
      return this.http.post<User>('http://localhost:5000/api/auth/register', this.user)
  }

  constructor(private http: HttpClient) { }
}
