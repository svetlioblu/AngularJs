import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {
  constructor(private apiService: ApiService, private router: Router) { }

  newTeamSubmitHandler(newThemeForm: NgForm) {
    if (newThemeForm.invalid) {
      return
    }
    const { themeName, postText } = newThemeForm.value
    this.apiService.createTheme(themeName, postText).subscribe(() => {
      this.router.navigate(['/themes'])
    })

  }
}
