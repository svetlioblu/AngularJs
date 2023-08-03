import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/costants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { UserService } from '../user.service';


interface Profile {
  username: string,
  email: string,
  tel: string
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEditMode: boolean = false
  profileDetails: Profile = {
    username: '',
    email: '',
    tel: ''
  }

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    tel: ['']
  })


  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    // Add profile value for the first time into the read only
    const { username, email, tel } = this.userService.user!
    this.profileDetails = {
      username,
      email,
      tel
    }
    this.form.setValue({
      username,
      email,
      tel
    })
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode
  }
  handleCancel(): void {
    this.toggleEditMode()
    this.ngOnInit()
  }
  saveProfileHandler(): void {
    if (this.form.invalid) {
      return
    }
    //update the profile value once modified
    this.profileDetails = { ...this.form.value } as Profile

    const { username, email, tel } = this.form.value
    this.userService.updateProfile(username!, email!, tel!).subscribe(() => {
      this.toggleEditMode()
    })
  }
}
