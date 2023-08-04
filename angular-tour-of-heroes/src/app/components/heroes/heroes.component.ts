import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HEROES } from 'src/app/mock-heroes';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = []
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  private getHeroes() {
    this.heroService.getAllGeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
  ngOnInit(): void {
    this.getHeroes()
  }
}
