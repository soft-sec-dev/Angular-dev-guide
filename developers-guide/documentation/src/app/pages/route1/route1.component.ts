import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      route1 works!
    </p>
  `,
  styles: [
  ]
})
export class Route1Component {

}
