import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor () {
  }

  ngOnInit () {
    console.log('ng on init: app root component')
  }
}
