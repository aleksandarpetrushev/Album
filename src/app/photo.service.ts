import { Injectable } from '@angular/core';
import { IPhoto } from './photo.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const url = 'http://jsonplaceholder.typicode.com/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(url).pipe(
      tap(photos => console.log('fetched photos')),
      catchError(this.handleError('getPhotos', []))
    );
  }

  getPhoto(id: number): Observable<IPhoto> {
    const url1 = url + '/' + id;

    return this.http.get<IPhoto>(url1 + '/' + id).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<IPhoto>(`getPhoto id=${id}`))
    );
  }

  updatePhoto(photo: IPhoto): Observable<IPhoto> {
    const url1 = url + '/' + photo.id;

    return this.http.put<IPhoto>(url1, photo, httpOptions).pipe(
      tap(_ => console.log(`updated photo id=${photo.id}`)),
      catchError(this.handleError<any>('updatePhoto'))
    );
  }

  deletePhoto(id: number): Observable<IPhoto> {
    const url1 = url + '/' + id;

    return this.http.delete<IPhoto>(url1, httpOptions).pipe(
      tap(_ => console.log(`deleted photo id=${id}`)),
      catchError(this.handleError<IPhoto>('deletePhoto'))
    );
  }

  addPhoto(photo: IPhoto): Observable<IPhoto> {
    return this.http.post<IPhoto>(url, photo, httpOptions).pipe(
      tap((product: IPhoto) => console.log(`added photo w/ id=${photo.id}`)),
      catchError(this.handleError<IPhoto>('addPhoto'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

