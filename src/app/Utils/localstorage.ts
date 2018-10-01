import { Injectable } from '@angular/core';
import { AppModel } from '../Models/apps-model';

@Injectable({
  providedIn: 'root'
})

export class LocalStorage {
  update (app) {
    console.log('apps = ', app)
    return window.localStorage.setItem('apps', JSON.stringify(app))
  }

  read(key) {
    return JSON.parse(window.localStorage.getItem(key))
  }
}