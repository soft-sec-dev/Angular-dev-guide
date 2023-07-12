import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section>
    <form >
      <input type="text" placeholder="Filter by  city">
      <button class="primary" type="button">Search</button>
    </form>
    <section class="result">
    <app-housing-location></app-housing-location>
    </section>
   </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
