import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  passwordModel: string = '';
  confirmPasswordModel: string = '';
  misMatch: string = ''

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
  }
  

}
