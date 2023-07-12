import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section>
    <form >
      <input type="text" placeholder="">
    </form>
   </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
