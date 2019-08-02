import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';


const routes: Routes = [
  { path: 'album/:id', component: PhotoComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'album', component: AlbumComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
