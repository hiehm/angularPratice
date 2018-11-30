import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { HeroServiceRService } from '../hero-service-r.service';
import { Hero } from '../../../ViewModel/Hero';

import { slideInDownAnimation } from '../../animations';


@Component({
  selector: 'app-hero-detail-r',
  templateUrl: './hero-detail-r.component.html',
  styleUrls: ['./hero-detail-r.component.css']
  ,animations: [slideInDownAnimation]
})
export class HeroDetailRComponent implements OnInit {
  @HostBinding("@routeAnimation") slideInDownAnimation = true;
  @HostBinding("style.display") display = 'block';
  @HostBinding("style.position") position = 'absolute';

  hero$: Observable<Hero | undefined>; //由於strictCheckNull啟用關係,型別必須加入 | undefined

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroServiceRService
  ) { }

  ngOnInit() {
   //this.route.queryParams.subscribe((value) => { //取得QueryString方式
   //  let id: string = (value['id']);
   //  this.hero$ = this.service.getHero(id);

   // });
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => { //具有取消前一個內部Observable效果,當發出新的Observable時,將不再注意前一個
        if (params.get('id') !== null && params.get('id') !== undefined) {
          let id: string = params.get('id')!.toString();
          return this.service.getHero(id);
        }
        return new Observable<Hero>();
      })
    );
  }

  gotoHeroes(hero: Hero) {
    let heroId = hero ? hero.id : null;
    //透過內部程式進行跳轉動作
    this.router.navigate(['/superheroes', { id: heroId, foo: JSON.stringify(hero) }]); 
  }
}
