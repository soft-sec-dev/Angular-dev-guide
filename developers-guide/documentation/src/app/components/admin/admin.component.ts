import { Component } from '@angular/core';
import { StanadloneComponent } from '../stanadlone/stanadlone.component';

@Component({
  standalone:true,
  selector: 'app-admin',
  imports:[StanadloneComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

}
