import { Component, OnInit,  EventEmitter, Input, Output } from '@angular/core';
import { AppModel } from '../../Models/apps-model'
import { LocalStorage } from '../../Utils/localstorage';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() app: AppModel;
  @Input() isFavPage: boolean;
  @Output() onUpdate = new EventEmitter<boolean>();
  favApps: Array<Object> = [];
  constructor(private ls: LocalStorage, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  addToFav(app) {
    this.favApps = this.ls.read('apps') || []
    const isAdded: any = this.favApps.find((favApp: any) => favApp.name === app.name)
    if (!isAdded) {
      this.favApps.push(app)
      localStorage.setItem( 'apps', JSON.stringify(this.favApps));
      this.openSnackBar('Added to my favourite', 'OK')
    } else {
      this.openSnackBar('App is already added', 'CLOSE')
    }
    this.onUpdate.emit()
  }

  removeFromFav(app) {
    this.favApps = this.ls.read('apps')
    this.favApps = this.favApps.filter((favApp: any) => favApp.name !== app.name)
    localStorage.setItem( 'apps', JSON.stringify(this.favApps));
    this.openSnackBar('App removed from my favourite', 'CLOSE')
    this.onUpdate.emit()
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
