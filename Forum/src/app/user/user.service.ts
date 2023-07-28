import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class UserService {
  private user$$ = new BehaviorSubject<User | undefined>(undefined)

  user$ = this.user$$.asObservable()

  user: User | undefined;
  USER_KEY = '[user]'

  get isLogged(): boolean {
    return !!this.user
  }
  constructor(private http: HttpClient) {
    // try {
    //   const lsUser = localStorage.getItem(this.USER_KEY) || ''
    //   this.user = JSON.parse(lsUser)

    // } catch (error) {
    //   this.user = undefined
    // }
  }

  login(email: string, password: string) {
    // this.user = {
    //   email: 'mexikaneza@abv.bg',
    //   firstName: 'John',
    // }
    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
    return this.http.post<User>('/api/login', { email, password }).pipe(tap((user) => this.user$$.next(user)))
  }

  register(username: string,
    email: string,
    password: string,
    rePassword: string,
    tel: string) {

    return this.http.post('/api/register', { username, email, password, rePassword, tel })
  }

  logout(): void {
    this.user = undefined
    localStorage.removeItem(this.USER_KEY)
  }

}
