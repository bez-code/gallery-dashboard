import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostsInterface } from '../models/posts.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private api: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() : Observable<PostsInterface[]> {
    return this.http.get<PostsInterface[]>(this.api);
  }

}
