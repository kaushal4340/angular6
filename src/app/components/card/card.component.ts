import { Component, OnInit, Input } from '@angular/core';
import { AppModel } from '../../Models/apps-model'
import { LocalStorage } from '../../Utils/localstorage';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() app: AppModel;
  favApps: Array<Object> = [];
  constructor(private ls: LocalStorage) { }

  ngOnInit() {
  }

  addToFav(app) {
    this.favApps = this.ls.read('apps') || []
    const isAdded: any = this.favApps.find((favApp: any) => favApp.name === app.name)
    console.log('item = ', isAdded)
    if (!isAdded) {
      this.favApps.push(app)
    }
    localStorage.setItem( 'apps', JSON.stringify(this.favApps));
  }

}
