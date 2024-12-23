import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryInterface } from '../models/gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private api: string = 'https://angular-test.free.beeceptor.com/api/gallery/';

  constructor(private http: HttpClient) { }

  getPhotos(page : number = 1) : Observable<GalleryInterface[]> {
    return this.http.get<GalleryInterface[]>(this.api.concat(page.toString()));
  }

  
}
