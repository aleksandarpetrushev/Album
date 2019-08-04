import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';
import { NewPhotoComponent } from './new-photo/new-photo.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'album/new', component: NewPhotoComponent },
  { path: 'album/:id', component: PhotoComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
