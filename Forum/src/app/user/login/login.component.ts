import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService) { }

  login(email: string, password: string): void {
    //todo for now we are not handling th data
    this.userService.login()
  }
}
