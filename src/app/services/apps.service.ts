import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  constructor(private httpClient: HttpClient) { }

  fetch () {
    return this.httpClient.get("http://demo8828713.mockable.io/eac")
  }
}
