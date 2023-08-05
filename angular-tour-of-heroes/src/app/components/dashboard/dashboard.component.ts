import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  heroes: Hero[] = []

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes() {
    this.heroService.getAllGeroes()
      .subscribe(hero => this.heroes = hero.slice(1, 5))
  }
}
