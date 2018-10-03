import { Injectable } from '@angular/core';
import { AppModel } from '../Models/apps-model';

@Injectable({
  providedIn: 'root'
})

export class LocalStorage {
  update (key, app) {
    return window.localStorage.setItem(key, JSON.stringify(app))
  }

  read(key) {
    return JSON.parse(window.localStorage.getItem(key))
  }
}