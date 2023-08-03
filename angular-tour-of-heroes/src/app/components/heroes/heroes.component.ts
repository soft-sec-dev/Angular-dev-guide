import { Component } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HEROES } from 'src/app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  rename!:string
  heroes: Hero[] = HEROES
  heroSelected?:Hero

  pressbutton(id:number){

  }
  onSelect(hero:Hero){
    this.heroSelected = hero
    console.log(this.heroSelected)
  }

}
