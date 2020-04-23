import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor() { }

  logClickEvent() {
    console.log('Button has been clicked');
  }

  logNumericValueChange() {
    console.log('Numerical input has been changed');
  }

}
