import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy  } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-location-path',
  templateUrl: './location-path.component.html',
  styleUrls: ['./location-path.component.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class LocationPathComponent implements OnInit {

  path: string = 'location';

  constructor(
    private location: Location, 
    private router: Router) {
      // Subscribe to change path showed in component
      router.events.subscribe(val => {
        // False / True if NavigationEnd
        // console.log(`val instanceof NavigationEnd: ${val instanceof NavigationEnd}`);

        let actualPath = this.location
          // Get actual path
          .path()
          // Use capital letters
          .toUpperCase();
          
        // Set actual path into the component
        this.path = actualPath.slice(1, actualPath.length);
      });
  }

  ngOnInit(): void {
    let actualPath = this.location
      // Get actual path
      .path()
      // Use capital letters
      .toUpperCase();

    // Set actual path into the component
    this.path = actualPath.slice(1, actualPath.length);
  }

  // i-bs btn back
  goBack() {
    this.location.back();
  }

  // i-bs btn forward
  goForward() {
    this.location.forward();
  }
}
