import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegationService } from 'src/app/services/navegation.service';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnChanges {

  secction: string = ''

  constructor(private navegationService: NavegationService) {
    this.secction = this.navegationService.getTargetSection()
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes[this.secction]){
      const newValue = changes[this.secction].currentValue
      const oldValue = changes[this.secction].previousValue
      console.log(`anterior: ${oldValue} ---- nuevo valor: ${newValue}`)
    }
  }
}
