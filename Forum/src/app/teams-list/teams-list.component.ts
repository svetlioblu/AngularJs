import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css'],
})
export class TeamsListComponent implements OnInit {
  themesList: Theme[] = [];
  isLoading: boolean = true;
  isSubscribed: boolean = false

  //Inject apiService
  constructor(private apiService: ApiService, private userService: UserService) { }


  get isLogged(): boolean {
    return this.userService.isLogged
  }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themesList = themes;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      },
    });
  }

  toggleSubscribeClass(button: HTMLButtonElement) {
    this.isSubscribed = !this.isSubscribed
    button.innerText = this.isSubscribed ? 'unsubscribe' : 'subscribe'
    button.className = this.isSubscribed ?'unsubscribe':'subscribe'
  }
}
