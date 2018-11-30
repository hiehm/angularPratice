import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Hero } from 'src/ViewModel/Hero';
import { HEROES } from '../../Utility/Mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceRService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  getHero(id: number | string) {
    return this.getHeroes().pipe(
      map(
        (heroes: Hero[]) =>
          heroes.find(hero => hero.id === +id) //回傳一個Observable<Hero> Object
        //heroes.filter(hero => hero.id === +id) //回傳一個Observable<Hero[]> Array
      ));
    // ) 
    //.map(
    //  //(valueVariable:Type)代表getHeroes回傳的值
    //  //透過pipe方式傳入管線內進行處理後輸出
    //  (heroes: Hero[]) =>
    //    // (+) before `id` turns the string into a number
    //    heroes.find(hero => hero.id === +id))

    //);
  }
}
