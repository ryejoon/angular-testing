import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightswitch',
  template: `
      <button (click)="clicked()">Click me!</button>
      <span>{{message}}</span>
  `,
  styles: []
})
export class LightswitchComponent {
  isOn = false;
  clicked() {
    this.isOn = !this.isOn;
  }

  get message() {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }
}
