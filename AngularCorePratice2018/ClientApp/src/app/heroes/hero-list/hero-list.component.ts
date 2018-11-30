import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';

import { HeroServiceRService } from '../hero-service-r.service';
import { Hero } from '../../../ViewModel/Hero';
import { slideInDownAnimation } from '../../animations';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
  , animations: [slideInDownAnimation]
})
export class HeroListComponent implements OnInit {
  @HostBinding("@routeAnimation") slideInDownAnimation = true;
  @HostBinding("style.display") display = 'block';
  @HostBinding("style.position") position = 'absolute';
  heroes$: Observable<Hero[]>;
  selectedId: number;


  constructor(
    private service: HeroServiceRService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id')!;
        return this.service.getHeroes();
      })
      //mergeMap(params => {
      //  // (+) before `params.get()` turns the string into a number
      //  this.selectedId = +params.get('id')!;
      //  return this.service.getHeroes();
      //})
    );
  }

}
