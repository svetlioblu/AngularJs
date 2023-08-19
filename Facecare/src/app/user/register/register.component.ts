import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  passwordModel: string = '';
  confirmPasswordModel: string = '';
  misMatch: string = ''

  constructor(private userService: UserService, private router: Router) { }

  registerSubmitHandler(registerForm: NgForm) {
    if (registerForm.invalid) {
      return
    } else if (this.passwordModel !== this.confirmPasswordModel) {
      console.error(`Password Mismatch!`);
      this.misMatch = `Password Mismatch!`
      return
    } else {
      this.misMatch = ''
    }

    const { firstName, lastName, age, tel, email, password } = registerForm.value

    this.userService.register(firstName,
      lastName,
      age,
      tel,
      email,
      password).subscribe(() => {
        this.router.navigate(['/'])
      })

  }



}
