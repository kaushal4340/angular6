import { Component, OnInit } from '@angular/core';
import { AppsService } from '../../services/apps.service';
import { AppModel } from '../../Models/apps-model';
import { LocalStorage } from '../../Utils/localstorage';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  private apps: AppModel;
  isFavPage: boolean;
  favApps: Array<Object> = [];
  constructor(private service: AppsService, private ls: LocalStorage) { }

  ngOnInit() {
    this.service.fetch()
      .subscribe((response: any) => {
        console.log('apps response : ', response)
        this.apps = response.apps
      })
    this.favApps = this.ls.read('apps') || []
  }

  onTabChange(event: MatTabChangeEvent) {
    // methods: event.index, event.tab
    if (event.index === 1) {
      this.isFavPage = true
    }
    this.favApps = this.ls.read('apps')
  }

  onUpdate(event: MatTabChangeEvent) {
    this.favApps = this.ls.read('apps')
  }

}
