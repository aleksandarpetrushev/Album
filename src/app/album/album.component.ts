import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../photo.model';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  photos: IPhoto[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getPhotos()
        .subscribe((data: IPhoto[]) => this.photos = data);
  }

}
