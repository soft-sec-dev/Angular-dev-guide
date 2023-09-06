import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavegationService {

  constructor() { }
  private targetSection!: string;

  setTargetSection(sectionId: string) {
    console.log('service cambiando valor')
    this.targetSection = sectionId;
  }

  getTargetSection() {
    console.log('sacando nuevo valor')
    return this.targetSection;
  }
}
