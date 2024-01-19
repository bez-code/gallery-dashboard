import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsInterface } from '../models/posts.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts?: PostsInterface[]

  id!: number;
  title!: string;
  body!: string

  constructor(private service: PostsService) { }
  
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.service.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
