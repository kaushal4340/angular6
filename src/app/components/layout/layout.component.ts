import { Component, OnInit } from '@angular/core';
import { AppsService } from '../../services/apps.service';
import { AppModel } from '../../Models/apps-model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  private apps: AppModel;
  constructor(private service: AppsService) { }

  ngOnInit() {
    this.service.fetch()
      .subscribe((response: any) => {
        console.log('apps response : ', response)
        this.apps = response.apps
      })
  }

}
