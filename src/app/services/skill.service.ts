import { Injectable } from '@angular/core';
import {Select2OptionData} from "ng-select2";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }
  getDynamicList(): Observable<Array<Select2OptionData>> {
    return Observable.create((obs) => {
      obs.next([
        {
          id: 'dyn1',
          text: 'Dynamic 1'
        },
        {
          id: 'dyn2',
          text: 'Dynamic 2'
        },
        {
          id: 'dyn3',
          text: 'Dynamic 3'
        },
        {
          id: 'dyn4',
          text: 'Dynamic 4'
        }
      ]);
      obs.complete();
    });
  }
}
