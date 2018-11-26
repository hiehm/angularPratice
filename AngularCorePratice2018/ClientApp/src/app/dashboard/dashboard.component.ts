import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from '../../ViewModel/Hero'; //Model
import { HeroService } from '../../Service/hero.service'; //HeroService
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []; //初始化Hero Array
  constructor(private heroService: HeroService, private _location: Location) { //DI HeroService

  }

  ngOnInit() {
    this.getHeroesObservable();
  }
  getHeroesObservable(): void {
    this.heroService.getHeroesObservable()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  goBack(): void {
    this._location.back();
  }
}
