import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../../ViewModel/Hero';
import { HeroService } from '../../Service/hero.service';
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>; //宣告Observable回傳結果物件
  private searchTerms = new Subject<string>(); //宣告一個Subject
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      // 每次擊鍵後等待300毫秒，然後再搜尋他
      debounceTime(300),
      // 假如與上次的值相同則忽略
      distinctUntilChanged(),
      // 當term變更時更新搜索結果，它取消並丟棄先前的搜索可見性，只返回最新的可見的搜索服務。
      switchMap((term: string) => this.heroService.searchHeroes(term)) //呼叫heroService.searchHeroes
    );
  }
  search(term: string) { //Keyup事件呼叫函式
    this.searchTerms.next(term); //Subject物件執行next
  }
}
