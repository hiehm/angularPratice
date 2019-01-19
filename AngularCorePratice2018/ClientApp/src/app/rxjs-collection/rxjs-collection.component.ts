import { Component, OnInit, QueryList, ViewChild, ElementRef, Inject } from '@angular/core';
import { Observable, combineLatest, forkJoin, Subject, interval, timer, fromEvent, empty, of, from, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap, take, switchMap, shareReplay, debounceTime, distinctUntilChanged, filter, combineAll, mapTo, takeUntil, skip, takeLast, bufferTime, bufferCount, distinct, zip, catchError, repeat } from 'rxjs/operators';
import { UpperCasePipe, JsonPipe } from '@angular/common';
@Component({
  selector: 'app-rxjs-collection',
  templateUrl: './rxjs-collection.component.html',
  styleUrls: ['./rxjs-collection.component.css']
})
export class RxjsCollectionComponent implements OnInit {
  @ViewChild('CallTakeUntil') _CallTakeUntil: ElementRef;
  @ViewChild('CallTakeLast') _CallTakeLast: ElementRef;
  @ViewChild('BufferBtnClcik') _BufferBtnClcik: ElementRef;
  private readonly API_URL = 'https://api.github.com/users';
  private readonly API_URL2 = 'https://jsonplaceholder.typicode.com/todos/';
  private searchTerms = new Subject<string>(); //宣告一個Subject
  bufferResult: string;
  bufferFuncName: string;
  catchResult: string;
  combineAllResult: Array<string[]>;
  distinctResult: string;
  private _takeUntilButtonEvent = new Subject();
  takeUntilResult: string;
  takeLastResult: string;
  data$: Observable<any[]>;
  data2$: Observable<any[]>;
  data3$: Observable<any[]>;
  funcName: string;
  debounceTimeStr: Observable<any>;
  private upperPipe: UpperCasePipe;
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.upperPipe = new UpperCasePipe();
    //string無初始化為undefined
    this.takeUntilResult = '';
    this.takeLastResult = '';
    this.bufferResult = '';
    this.catchResult = '';
    this.combineAllResult = new Array<string[]>();
    this.distinctResult = '';
    this.data$ = this.httpClient.get<any[]>(this.API_URL2).pipe(
      map(data => data.splice(0, 10))
    );
    this.debounceTimeStr = this.searchTerms.pipe(
      //緩衝時間,每次擊鍵後等待1000毫秒，然後再搜尋他
      debounceTime(1000),
      // 假如與上次的值相同則忽略
      distinctUntilChanged(),
      //當搜尋大於三個字後才開始執行
      filter(x => x.length >= 3),
      map(x => x)
    );
  }

  //buffer-bufferTime
  CallbufferTime() {
    this.bufferResult = '';
    this.bufferFuncName = 'bufferTime';
    interval(300).pipe(
      //每一秒將緩存輸出
      bufferTime(1000),
      takeUntil(timer(5000))
    ).subscribe(res => {
      this.bufferResult += `[${res}]、`;
    });
  }
  //buffer-bufferCount
  CallbufferCount() {
    this.bufferResult = '';
    this.bufferFuncName = 'bufferCount';
    interval(300).pipe(
      //將資料以每四個為群組,打包輸出
      bufferCount(4),
      takeUntil(timer(5000))
    ).subscribe(res => {
      this.bufferResult += `[${res}]、`;
    });
  }
  //buffer-Button bufferTime
  CallBtnbufferTime() {
    this.bufferFuncName = '連續點擊測試';
    let ev = fromEvent(this._BufferBtnClcik.nativeElement, 'click');
    this.bufferResult = 'Fail';
    ev.pipe(
      bufferTime(500),
      filter(arr => arr.length >= 2)
    ).subscribe(() => {
      this.bufferResult = 'Double Click Success';
    });
  }
  //catchError
  CallcatchWithEmpty() {
    //['1', '2', '3', '4', 5] 欲測試必須改為此陣列
    from(['1', '2', '3', '4', 'd']).pipe(
      zip(interval(300), (x, y) =>this.upperPipe.transform(x)!),
      catchError(error => {
        console.log(error);
        return empty();
      })
    ).subscribe(res => {
      this.catchResult += res + ',';
      }, (err) => { }, () => {
      this.catchResult += 'Complete';
    });
  }

  //combineAll
  CallcombineAll() {
    //只取前兩個
    let source = interval(1000).pipe(take(2));
    let example = source.pipe(
      map(val => interval(1000).pipe(map(i => `Result(${val}):${i}`), take(5)))
    );
    const combined = example.pipe(combineAll());
    const subscribe = combined.subscribe(val => this.combineAllResult.push(val));
  }

  //Distinct - Filter For Array
  CallDistinctByArray() {
    //創建一個Observable Array
    from(['1', '2', '3', '1', '2']).pipe(
      zip(interval(300), (x, y) => x),
      distinct()
    ).subscribe(res => {
      this.distinctResult += res + ',';
    });
  }
  //Distinct - Filter For Collection
  CallDistinctByCollection() {
    from([{ value: 'a' }, { value: 'b' }, { value: 'c' }, { value: 'a' }, { value: 'c' }]).pipe(
      zip(interval(300), (x, y) => x),
      distinct((x) => x.value)
    ).subscribe(res => {
      this.distinctResult += res.value + ',';
    });
  }
  //Distinct - ClearFlush By Second Parameter
  CallDistinctForClearFlush() {
    from(['1', '2', '3', '1', '2']).pipe(
      zip(interval(300), (x, y) => x),
      distinct(null!, interval(1300))
    ).subscribe(res => {
      this.distinctResult += res + ',';
    });
  }
  //DistinctUntilChanged 
  CallDistinctUntilChanged() {
    from(['a', 'b', 'c', 'c', 'd', 'e', 'e', 'f']).pipe(
      zip(interval(300), (x, y) => x),
      distinctUntilChanged()
    ).subscribe(res => {
      this.distinctResult += res + ',';
    });
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
    //此forkJoin 必須由rxJs引用
    //當所有Observable都執行Complete事件完成後觸發
    this.data$ = forkJoin(this.data2$, this.data3$).pipe(
      map(([a, b]) => (a.concat(b)))
    );
  }
  CalldebounceTime(term: string) {
    this.searchTerms.next(term);
  }
  //TakeUntil
  StartTakeUntilInterval() {
    interval(1000).pipe(
      skip(1),
      takeUntil(
        fromEvent(this._CallTakeUntil.nativeElement, 'click')),
      //takeUntil(this._takeUntilButtonEvent)
    ).subscribe(res => {
      this.takeUntilResult += res + ',';
    }, err => { }, () => {
      this.takeUntilResult += 'Complete';
    });
  }
  //Call TakeUntil
  CallTakeUntil() {
    this._takeUntilButtonEvent.next();
  }
  //TakeLast
  StartTakeLastInterval() {
    interval(1000).pipe(
      takeUntil(
        fromEvent(this._CallTakeLast.nativeElement, 'click')),
      takeLast(3)
    ).subscribe(res => {
      console.log(res);
      this.takeLastResult += res + ',';
    }, err => { }, () => {
      this.takeLastResult += 'Complete';
    });
  }
}
