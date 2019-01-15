import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, forkJoin, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap, take, switchMap, shareReplay, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs-collection',
  templateUrl: './rxjs-collection.component.html',
  styleUrls: ['./rxjs-collection.component.css']
})
export class RxjsCollectionComponent implements OnInit {
  private readonly API_URL = 'https://api.github.com/users';
  private readonly API_URL2 = 'https://jsonplaceholder.typicode.com/todos/';
  private searchTerms = new Subject<string>(); //宣告一個Subject
  data$: Observable<any[]>;
  data2$: Observable<any[]>;
  data3$: Observable<any[]>;
  funcName: string;
  debounceTimeStr: Observable<any>;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.data$ = this.httpClient.get<any[]>(this.API_URL2).pipe(
      map(data => data.splice(0, 10))
    );
    this.debounceTimeStr = this.searchTerms.pipe(
      //緩衝時間,每次擊鍵後等待1000毫秒，然後再搜尋他
      debounceTime(1000),
      // 假如與上次的值相同則忽略
      distinctUntilChanged(),
      //當搜尋大於三個字後才開始執行
      filter(x => x.length > 3),
      map(x => x)
    );
  }

  CallMap() {
    this.data$ = this.data$.pipe(
      //map變化前
      tap(data => console.log(data)),
      //map輸出當前物件修改後狀態
      //data.map屬於javascript的map,有遍歷物件集合特性
      map(data => data.map(x => x.title)),
      //map變化後
      tap(data => console.log(data))
    )
    this.funcName = 'map';
  }
  CallswitchMap() {
    this.data$ = this.data$.pipe(
      shareReplay(1),
      //呼叫新的Observable,且會取消上一個未完成的Observable
      switchMap(() => this.httpClient.get<any[]>(this.API_URL2))
    );
    this.funcName = 'switchMap';
  }
  CallcombineLatest() {
    this.data2$ = this.httpClient.get<any[]>(this.API_URL2);
    this.data3$ = this.httpClient.get<any[]>(this.API_URL);
    //此combineLatest 必須由rxJs引用
    //當所有Observable都有資料流時,立即觸發回傳方法
    this.data$ = combineLatest(this.data2$, this.data3$).pipe(
      //最終所有Http結果回傳後,才執行下面方法
      map(([a, b]) => (a.concat(b)))
    );
    this.funcName = 'combineLatest';
  }
  CallforkJoin() {
    this.data2$ = this.httpClient.get<any[]>(this.API_URL2);
    this.data3$ = this.httpClient.get<any[]>(this.API_URL);
    //此combineLatest 必須由rxJs引用
    //當所有Observable都執行Complete事件完成後觸發
    this.data$ = forkJoin(this.data2$, this.data3$).pipe(
      map(([a, b]) => (a.concat(b)))
    );
  }
  CalldebounceTime(term: string) {
    this.searchTerms.next(term);
  }
}
