import { Component } from '@angular/core';
import { TestService } from './services/test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular6';
  message = null
  constructor (private service: TestService) {

  }

  ngOnInit () {
    console.log('ng on init')
    this.service.fetch('http://demo1230338.mockable.io/eac')
      .subscribe((response: any) => {
        console.log('test servic e response : ', response)
        this.message = response.msg
      })
  }
}
