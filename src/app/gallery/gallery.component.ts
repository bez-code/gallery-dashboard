import { Component } from '@angular/core';
import { GalleryInterface } from '../models/gallery.model';
import { GalleryService } from '../services/gallery.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  photos?: Observable<GalleryInterface[]>
  currentPage: number = 1


  constructor(private service: GalleryService) { }

  ngOnInit(): void {
   this.photos=  this.service.getPhotos();
  }

  

}
