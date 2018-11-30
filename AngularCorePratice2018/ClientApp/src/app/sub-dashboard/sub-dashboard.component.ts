import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../Service/hero.service';
import { Hero } from '../../ViewModel/Hero';
@Component({
  selector: 'app-sub-dashboard',
  templateUrl: './sub-dashboard.component.html',
  styleUrls: ['./sub-dashboard.component.css']
})
export class SubDashboardComponent implements OnInit {
  heroes: Hero[] = []; //初始化Hero Array
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroesObservable();
  }
  getHeroesObservable(): void {
    this.heroService.getHeroesObservable()
      .subscribe(heroes => this.heroes = heroes.slice(5, 9));
  }
}
