import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private userService: UserService, private router: Router) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged
  }

  loginSubmitHandler(loginForm: NgForm): void {

    if (loginForm.invalid) {
      return
    }
    const { email, password } = loginForm.value
    this.userService.login(email, password).subscribe(() => {

      this.router.navigate(['/'])
    })
  }
}
