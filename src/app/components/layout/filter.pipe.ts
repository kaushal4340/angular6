import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filter'})

export class FilterPipe implements PipeTransform {
  transform(apps : any[], searchText : string) : any[] {
    if (!apps)
      return []
    if (!searchText)
      return apps
    searchText = searchText.toLowerCase();
    return apps.filter(app => {
      return app.name.toLowerCase().includes(searchText)
    })
  }
}