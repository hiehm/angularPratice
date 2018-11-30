import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { HeroService, User } from '../../Service/hero.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-httpclient-test',
  templateUrl: './httpclient-test.component.html',
  styleUrls: ['./httpclient-test.component.css']
})
export class HttpclientTestComponent implements OnInit {
  results: any;
  results$: any;
  header: any;
  searchvalue: string;
  private searchTerms = new Subject<User[]>();
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    //this.results$ = this.searchTerms.pipe(
    //  // 每次擊鍵後等待300毫秒，然後再搜尋他
    //  debounceTime(300),
    //  // 假如與上次的值相同則忽略
    //  distinctUntilChanged(),
    //  // 當term變更時更新搜索結果，它取消並丟棄先前的搜索可見性，只返回最新的可見的搜索服務。
    //  switchMap(this.results$) //呼叫heroService.searchHeroes
    //)
  }
  GetUsers(): void {
    this.searchvalue = '';
    this.heroService.getUsers().subscribe(data => {
      this.results$ = data;
      this.results = this.results$.body; //回傳資料集合
      this.header = this.results$.headers; //HttpResponse Header
    });
  }
  search(terms: string) {
    this.results = this.results$.body.filter(h => h.login.toLowerCase().includes(terms.toLocaleLowerCase()));
   // this.searchTerms.next(this.results$);
  
  }
}
