import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  private user$$ = new BehaviorSubject<User | undefined>(undefined)

  user$ = this.user$$.asObservable()

  user: User | undefined;

  get isLogged(): boolean {
    return !!this.user
  }
   subscription: Subscription;

   constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user
    })
  }
  
  login(email: string, password: string) {

    return this.http
      .post<User>('/api/users/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)))
  }

  register(firstName: string,
    lastName: string,
    age: number,
    tel: string,
    email: string,
    password: string,) {

    return this.http
      .post<User>('/api/users/register', { firstName,
        lastName,
        age,
        tel,
        email,
        password})
      .pipe(tap((user) => this.user$$.next(user)))
  }

  logout() {

    return this.http
      .post<User>('/api/users/logout', {})
      .pipe(tap(() => this.user$$.next(undefined) ))
  }

   ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
