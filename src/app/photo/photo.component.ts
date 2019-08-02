import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from '../photo.model';
import { PhotoService } from '../photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photo: IPhoto;
  @Input() title: string;

  constructor(private photoService: PhotoService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.photoService.getPhoto(+this.route.snapshot.paramMap.get('id'))
        .subscribe((photo: IPhoto) => {
          this.photo = photo;
          this.title = photo.title;
        });
  }

}
