import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger,state, animate, style, transition } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations:[
    trigger('fade', [
      state('void', style({ opacity: 0 })), // Estado inicial (cuando no existe)
      transition('void <=> *', animate(1000))
    ])
  ]
})
export class AboutMeComponent implements OnInit {
  textAnimated: string = 'Software engineering'
  ArrayText: Array<string> = ["Software engineering", "Software Developer", "DevOps"]
  currentCase = 0

  ngOnInit(): void {
    setInterval(() => {
      this.NumberAleatory()
    }, 3000)
  }

  NumberAleatory() {
    const caseNumberSelecter = Math.floor(Math.random() * 3) + 1
    if (this.currentCase === caseNumberSelecter - 1) {
      this.NumberAleatory()
    } else {
      this.currentCase = caseNumberSelecter - 1
      this.textAnimated = this.ArrayText[this.currentCase]
    }

  }
}
