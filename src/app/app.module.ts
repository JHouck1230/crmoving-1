import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';

import { AppRoutingModule }    from './app-routing.module';

import 'bootstrap';

import { AppComponent }        from './app.component';
import { HomeComponent }       from './components/home/home.component';
import { AboutUsComponent }    from './components/about-us/about-us.component';
import { GalleryComponent }    from './components/gallery/gallery.component';
import { TermsComponent }      from './components/terms/terms.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    GalleryComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
