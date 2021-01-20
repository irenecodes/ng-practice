import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';
  user = {
    userID: 1,
    firstName: 'Irene',
    lastName: 'Truong',
    todaysDate: new Date()
  }
  toggle = true;

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }
  toggleFormat() {
    this.toggle = !this.toggle;
  }
}
