import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  postsList: Post[] = [];

  //Inject apiService
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe((posts) => {
      console.log(posts[0]);

      this.postsList = posts;
    });
  }
}
