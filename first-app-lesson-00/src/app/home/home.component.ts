import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, RouterModule],
  template: `
   <section>
    <form >
      <input type="text" placeholder="Filter by  city">
      <button class="primary" type="button">Search</button>
    </form>
    <section class="results">
    <app-housing-location [routerLink]="['/']" *ngFor="let housingLocation of housingLocationList " [housingLocation]="housingLocation"></app-housing-location>
    </section>
   </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList:Housinglocation[] = []
  // houseService:HousingService = inject(HousingService)

  constructor(private houseService:HousingService){
    this.housingLocationList = this.houseService.getAllHousingLocations()
  }
}
