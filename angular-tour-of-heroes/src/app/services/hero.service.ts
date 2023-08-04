import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

  getAllGeroes():Observable<Hero[]>{
    const heroes = of(HEROES)
    this.messageService.add(`HeroSercice Feched`)
    return heroes;
  }
}
