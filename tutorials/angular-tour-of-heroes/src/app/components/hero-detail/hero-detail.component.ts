import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { HeroService } from 'src/app/services/hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }
  hero!: Hero

  ngOnInit(): void {
      this.getHero()
  }

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id)
      .subscribe(h => this.hero = h)
  }
  goBack(){
    this.location.back()
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}
