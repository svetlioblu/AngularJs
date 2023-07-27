import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/costants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS

  constructor(private userService: UserService, private router: Router) { }

  login(loginForm: NgForm): void {
    // console.log(loginForm.value);

    if (loginForm.invalid) {
      return
    }
    const { email, password } = loginForm.value
    this.userService.login(email, password)
    this.router.navigate(['/'])
  }
}
