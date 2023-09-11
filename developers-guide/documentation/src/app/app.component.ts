import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  standalone:true,
  imports:[RouterOutlet, DashboardComponent],
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styles: []
})
export class AppComponent {
  title = 'documentation';
}
