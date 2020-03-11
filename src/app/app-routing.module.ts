import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { HomeComponent }          from './components/home/home.component';
import { AboutUsComponent }       from './components/about-us/about-us.component';
import { GalleryComponent }       from './components/gallery/gallery.component';
import { TermsComponent }         from './components/terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
