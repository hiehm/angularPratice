import { Component, OnInit } from '@angular/core';
import { Hero } from '../../ViewModel/Hero';
import { HEROES } from '../../Utility/Mock-heros';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  hero = "MATT";
  heroClass: Hero = {
    id: 1,
    name:'matt_hero'
  };
  heroes = HEROES; 

  constructor() { }
  ngOnInit() {
  }
  selectedHero: Hero; //onSelect觸發後,回傳至html的物件
  onSelect(hero: Hero): void { //Html中所指定之方法,func(variable:Object):funcType
    this.selectedHero = hero;
  }
}
