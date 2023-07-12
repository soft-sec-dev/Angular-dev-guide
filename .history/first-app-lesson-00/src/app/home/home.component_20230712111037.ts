import { Component, inject } from '@angular/core';
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
    <section class="results">
    <app-housing-location *ngFor="let housingLocation of housingLocationList " [housingLocation]="housingLocation"></app-housing-location>
    </section>
   </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private housing){}

  housingLocationList!:Housinglocation[]
}
