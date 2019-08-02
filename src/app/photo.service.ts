import { Injectable } from '@angular/core';
import { IPhoto } from './photo.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  url = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this.url);
  }

  getPhoto(id: number): Observable<IPhoto> {
    return this.http.get<IPhoto>(this.url + '/' + id);
  }
}
