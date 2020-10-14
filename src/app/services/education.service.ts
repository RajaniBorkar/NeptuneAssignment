import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }
  public getEducationData() {
    return [
      { university: 'Pune university', degree: 'BACHELOR OF ENGINEERING', spcl: 'BE-IT', year: '2013',grade:'First' +
          ' Class'},
      { university: 'Maharashtra', degree: 'Diploma', spcl: 'Diploma', year: '2010',grade:'First Class'},
      { university: 'Maharashtra', degree: 'SSC', spcl: 'SSC', year: '2007',grade:'Distinction'}
     ];
  }
}
