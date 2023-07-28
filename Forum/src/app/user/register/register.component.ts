import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/costants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-pass-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    email: ['', [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    tel: [''],
    passGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required]]
    }, {
      validators: [matchPasswordsValidator('password', 'rePassword')]
    })
  })

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  register(): void {
    if (this.form.invalid) {
      return
    }
    // console.log(this.form.value);
    const { username, email, passGroup: { password, rePassword } = {}, tel } = this.form.value
    this.userService.register(username!, email!, password!, rePassword!, tel!).subscribe(() => {
      this.router.navigate(['/themes'])
    })
  }

}
