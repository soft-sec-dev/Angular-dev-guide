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
      <input type="text" placeholder="Filter by  city" #filter (input)="filterResults(filter.value)">
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
    <section class="results">
    <app-housing-location [routerLink]="['/']" *ngFor="let housingLocation of filteredLocationList " [housingLocation]="housingLocation"></app-housing-location>
    </section>
   </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = []
  filteredLocationList: Housinglocation[] = [];

  // houseService:HousingService = inject(HousingService)

  constructor(private housingService: HousingService) {
    // this.housingLocationList = this.houseService.getAllHousingLocations()
    this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
