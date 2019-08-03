import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from '../photo.model';
import { PhotoService } from '../photo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photo: IPhoto;
  @Input() title: string;

  constructor(private photoService: PhotoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.photoService.getPhoto(id)
        .subscribe((photo: IPhoto) => {
          this.photo = photo;
          this.title = photo.title;
        });
  }

  onSave(): void {
    return;
  }

}
