import { Component, OnInit } from '@angular/core';
import { Hero } from '../../ViewModel/Hero';
//import { HEROES } from '../../Utility/Mock-heros';
import { HeroService } from '../../Service/hero.service'; //注入Service服務,用以取得Heroes資料
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  hero = "MATT";
  heroClass: Hero = {
    id: 1,
    name: 'matt_hero'
  };
  //heroes = HEROES;
  heroes: Hero[];

  constructor(private heroService: HeroService) { //於建構式中進行DI Service,private Variable:TypeClass
    //this.heroes = this.heroService.getHeroes(); //修改由ngOnInit()呼叫
  }
  ngOnInit() { //初始化事件呼叫
   // this.getHeroes();
    this.getHeroesObservable();
  }
  //getHeroes(): void { //建構getHeroes方法
  //  this.heroes = this.heroService.getHeroes();//使用Service中的getHeroes方法取得Heroes資料
  //}
  getHeroesObservable(): void { //訂閱Observable
    this.heroService.getHeroesObservable().subscribe(heroes => this.heroes = heroes);
  }
  selectedHero: Hero; //onSelect觸發後,回傳至html的物件
  onSelect(hero: Hero): void { //Html中所指定之方法,func(variable:Object):funcType
    this.selectedHero = hero;
    this.heroService.addMessage(hero.name);
  }
}
