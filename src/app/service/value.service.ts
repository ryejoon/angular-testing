import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor() { }

  getValue() {
    return 'real value';
  }

  getValueAlwaysReal() {
    return 'always real value';
  }
}
