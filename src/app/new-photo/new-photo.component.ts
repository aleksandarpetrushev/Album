import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../photo.model';
import { PhotoService } from '../photo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.component.html',
  styleUrls: ['./new-photo.component.css']
})
export class NewPhotoComponent implements OnInit {
  model: IPhoto = {
    url: '',
    albumId: undefined,
    id: undefined,
    thumbnailUrl: '',
    title: ''
  };

  constructor(private photoService: PhotoService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(JSON.stringify(this.model));
    this.photoService.addPhoto(this.model).subscribe(res => {
      this.toastr.success('Photo has been added.');
      this.router.navigate(['/album']);
    }, (err) => {
      console.log(err);
    });
  }

  onCancel(): void {
    this.toastr.info('Photo not saved.');
    this.router.navigate(['/album']);
  }
}
