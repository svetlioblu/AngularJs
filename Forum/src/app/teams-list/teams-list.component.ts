import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css'],
})
export class TeamsListComponent implements OnInit {
  themesList: Theme[] = [];

  //Inject apiService
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getThemes().subscribe((themes) => {
      this.themesList = themes;
    });
  }
}
