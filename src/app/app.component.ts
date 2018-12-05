import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  activeTab: string;

  ngOnInit() {
    switch (document.location.hash) {
      case '#/':
        this.activeTab = 'home';
        break;
      case '#/about-us':
        this.activeTab = 'about-us';
        break;
      case '#/gallery':
        this.activeTab = 'gallery';
        break;
      case '#/terms':
        this.activeTab = 'terms';
        break;
    }
  }

}
