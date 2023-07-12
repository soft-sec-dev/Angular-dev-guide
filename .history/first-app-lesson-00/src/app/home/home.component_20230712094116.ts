import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
   <section>
    <form >
      <input type="text" placeholder="Filter by  city">
      <button class="primary" type="button">Search</button>
    </form>
    <section class="result">
    <app-housing-location [housingLocation]="housingLocation"]></app-housing-location>
    </section>
   </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocation:Housinglocation ={
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: 'assets/example-house.jpg',
    availableUnits: 99,
    wifi: true,
    laundry: false,
  }
}
