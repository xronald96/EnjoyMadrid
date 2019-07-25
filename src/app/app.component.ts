import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'enjoyMadrid';
  navBar = false;

constructor(
  public router: Router,
  private location: Location
) {
  }

  back() {
    this.location.back();
  }
}
