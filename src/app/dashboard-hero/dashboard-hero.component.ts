import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from '../service/hero.service';

@Component({
  selector: 'app-dashboard-hero',
  template: `
    <p>
      dashboard-hero works!
    </p>
  `,
  styles: []
})
export class DashboardHeroComponent {
  @Input() hero: Hero;
  @Output() selected = new EventEmitter<Hero>();
  click() { this.selected.emit(this.hero); }
}
