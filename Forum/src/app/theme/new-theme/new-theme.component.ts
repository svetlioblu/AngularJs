import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {
  constructor(private apiService: ApiService) { }

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
    console.log(newThemeForm.value);

  }
}
