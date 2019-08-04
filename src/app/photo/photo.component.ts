import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from '../photo.model';
import { PhotoService } from '../photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare let bootbox: any;

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() photo: IPhoto;

  constructor(private photoService: PhotoService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.photoService.getPhoto(id)
        .subscribe((photo: IPhoto) => {
          this.photo = photo;
        });
  }

  onSave(): void {
    this.photoService.updatePhoto(this.photo).subscribe(res => {
      this.toastr.success('Info saved', 'Photo details have been saved');
      this.router.navigate(['/album']);
      }, (err) => {
        console.log(err);
      }
    );
  }

  onCancel(): void {
    this.toastr.info('Changes not saved');
    this.router.navigate(['/album']);
  }

  onDelete(): void {
    if (confirm('Delete this photo?')) {
      this.photoService.deletePhoto(this.photo.id).subscribe(re => {
        this.toastr.warning('Photo deleted.');
        this.router.navigate(['/album']);
      }, (err) => {
        console.log(err);
      });
    }
  }

}
