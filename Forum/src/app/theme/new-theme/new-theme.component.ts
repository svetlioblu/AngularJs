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

  // postThemeHandler(event: Event, themeName: string, postText: string) {
  //   event.preventDefault()
  //   console.log(themeName, postText);
  //   this.apiService.postTheme({ themeName, postText }).subscribe(
  //     responce => {
  //       console.log('Response:', responce);
  //       // Handle the response as needed
  //     },
  //     error => {
  //       console.error('Error:', error);
  //       // Handle the error as needed
  //     }
  //   )
  // }

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
