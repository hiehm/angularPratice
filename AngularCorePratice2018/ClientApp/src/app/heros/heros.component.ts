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
  hero = "MATT"; //Variable
  selectedHero: Hero; //onSelect觸發後,回傳至html的物件
  heroClass: Hero = { //Object
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

  add(name: string, id: number | null | undefined): void { //參數id可接受型別為number、null、undefine
    id = 999;
    name = name.trim();
    if (!name) { return; }
    this.heroService.useHttpAddData({ id,name } as Hero) //創建一個Hero物件,name為其輸入值
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  getHeroesObservable(): void { //訂閱Observable
    this.heroService.getHeroesObservable().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void { //Html中所指定之方法,func(variable:Object):funcType
    this.selectedHero = hero;
    this.heroService.addMessage(hero.name);
  }
}
