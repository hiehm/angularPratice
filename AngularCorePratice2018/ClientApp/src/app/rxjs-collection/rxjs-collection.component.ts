import { Component, OnInit, QueryList, ViewChild, ElementRef, Inject } from '@angular/core';
import { Observable, combineLatest, forkJoin, Subject, interval, timer, fromEvent, empty, of, from, throwError, concat, Scheduler } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap, take, switchMap, shareReplay, debounceTime, distinctUntilChanged, filter, combineAll, mapTo, takeUntil, skip, takeLast, bufferTime, bufferCount, distinct, zip, catchError, repeat, concatAll, concatMap, merge, mergeAll, delay, mergeMap, window, count, switchAll, windowToggle, windowCount, windowTime, windowWhen, groupBy, reduce, publish, refCount, share } from 'rxjs/operators';
import { UpperCasePipe, JsonPipe } from '@angular/common';
import { SOURCE } from '@angular/core/src/di/injector';
@Component({
  selector: 'app-rxjs-collection',
  templateUrl: './rxjs-collection.component.html',
  styleUrls: ['./rxjs-collection.component.css']
})
export class RxjsCollectionComponent implements OnInit {
  @ViewChild('CallTakeUntil') _CallTakeUntil: ElementRef;
  @ViewChild('CallTakeLast') _CallTakeLast: ElementRef;
  @ViewChild('BufferBtnClcik') _BufferBtnClcik: ElementRef;
  @ViewChild('ClearMerge') _ClearMerge: ElementRef;
  @ViewChild('ClearWindow') _ClearWindow: ElementRef;
  private readonly API_URL = 'https://api.github.com/users';
  private readonly API_URL2 = 'https://jsonplaceholder.typicode.com/todos/';
  private searchTerms = new Subject<string>(); //宣告一個Subject
  bufferResult: string;
  bufferFuncName: string;
  catchResult: string;
  combineAllResult: Array<string[]>;
  concatMethods: string;
  concatResult: string;
  distinctResult: string;
  groupbyResult: any;
  mergeMethods: string;
  mergeResult: string;
  subjectResult: string;
  private _subjectBySubject = new Subject();
  private _takeUntilButtonEvent = new Subject();
  takeUntilResult: string;
  takeLastResult: string;
  windowResult: string;
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
    this.concatResult = '';
    this.concatMethods = '';
    this.distinctResult = '';
    this.groupbyResult = '';
    this.mergeMethods = '';
    this.mergeResult = '';
    this.subjectResult = '';
    this.windowResult = '';
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
    this._subjectBySubject.subscribe((data) => {
      this.subjectResult +='SubjectA:'+ data + ',';
    });
    this._subjectBySubject.subscribe((data) => {
      this.subjectResult += 'SubjectB:' + data + ',';
    });
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
      zip(interval(300), (x, y) => this.upperPipe.transform(x)!),
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

  //concat
  //將兩組Observable合併並且依序輸出
  CallConcat() {
    let f = timer(10, 500).pipe(
      map(r => {
        return { Source: 'A', value: r }
      }),
      take(4)
    );
    let g = timer(10, 500).pipe(
      map(r => {
        return { Source: 'B', value: r }
      }),
      take(4)
    );
    concat(f, g).subscribe(res => {
      this.concatMethods = 'Concat';
      this.concatResult += 'Source' + res.Source + ':' + res.value + ',';
    });
  }

  //concatAll
  //將多維陣列攤開成一維
  CallConcatAll() {
    let SourceA = from([1, 2, 3]);
    let SourceR = of(SourceA, [[4, 5, 6], [11, 23, 45]]);
    SourceR.pipe(
      concatAll()
    ).subscribe(res => {
      this.concatMethods = 'ConcatAll';
      this.concatResult += res + ',';
    });
  }

  //concatMap
  //map+concatAll
  CallConcatMap() {
    let SourceA = from([[1, 2, 3]]);
    let SourceB = from([[4, 5, 6], [7, 8, 9], [10, 11, 12]]);
    let SourceR = of(SourceA, SourceB);
    SourceR.pipe(
      concatMap(e => e.pipe(delay(500)))
    ).subscribe(res => {
      this.concatMethods = 'ConcatMap';
      this.concatResult += res + ',';
    });
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

  //Merge
  CallMerge() {
    this.mergeMethods = 'Merge';
    let interA = interval(500);
    let interB = interval(800);
    interA.pipe(
      merge(interB),
      takeUntil(
        fromEvent(this._ClearMerge.nativeElement, 'click')
      )
    ).subscribe(res => {
      this.mergeResult += res + ',';
    });
  }

  //MergeAll
  CallMergeAll() {
    this.mergeMethods = 'MergeAll';
    let SourceA = from([1, 2, 3]).pipe(delay(500));
    let SourceB = from([4, 5, 6]).pipe(delay(300));
    let SourceR = of(SourceA, SourceB, [[11, 23, 45]]);
    SourceR.pipe(
      mergeAll()
    ).subscribe(res => {
      this.mergeResult += res + ',';
    });
  }

  //MergeMap
  CallMergeMap() {
    this.mergeMethods = 'MergeMap';
    let SourceA = from([1, 2, 3]).pipe(delay(500));
    let SourceB = from([4, 5, 6]).pipe(delay(300));
    SourceA.pipe(
      mergeMap(obj => SourceB)
    ).subscribe(res => {
      this.mergeResult += res + ',';
    });
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

  //debounceTime
  CalldebounceTime(term: string) {
    this.searchTerms.next(term);
  }

  //forkJoin
  CallforkJoin() {
    this.data2$ = this.httpClient.get<any[]>(this.API_URL2);
    this.data3$ = this.httpClient.get<any[]>(this.API_URL);
    //此forkJoin 必須由rxJs引用
    //當所有Observable都執行Complete事件完成後觸發
    this.data$ = forkJoin(this.data2$, this.data3$).pipe(
      map(([a, b]) => (a.concat(b)))
    );
  }

  //GroupBy
  CallGroupBy() {
    let people = [
      { name: 'Anna', score: 100, subject: 'English' },
      { name: 'Anna', score: 90, subject: 'Math' },
      { name: 'Anna', score: 96, subject: 'Chinese' },
      { name: 'Jerry', score: 80, subject: 'English' },
      { name: 'Jerry', score: 100, subject: 'Math' },
      { name: 'Jerry', score: 90, subject: 'Chinese' },
    ];
    from(people).pipe(
      zip(interval(300), (x, y) => x),
      //groupBy 將相同元素集合起來,透過map進行組合輸出
      groupBy(person => person.name),
      map(group =>
        group.pipe(reduce((x, y) => (
          {
            name: y.name,
            score: y.score + x.score
          })))
      ),
      mergeAll()
    ).subscribe(res => {
      this.groupbyResult += `{name:${res.name},score:${res.score}}\n`;
    });
  }

  //Subject -multiCast
  CallSubject() {
    this._subjectBySubject.next('MATT');
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
    }, () => { }, () => {
      this.takeLastResult += 'Complete';
    });
  }

  //Window
  CallWindow() {
    //map(obj=>obj.pipe(count())),將1秒內Click次數統合
    //switchAll 攤平Observable<Observable<T>>後輸出
     fromEvent(document, 'click').pipe(
      window(interval(1000)),
      map(obj => obj.pipe(count())),
       switchAll(),
       takeUntil(fromEvent(this._ClearWindow.nativeElement, 'click', () => { this.windowResult = '' }))
    ).subscribe(res => {
      this.windowResult += res + ',';
    });
  }

  //WindowCount
  CallWindowCount() {
    //windowCount 設定每N項目發出後,就觸發一次
    interval(1000).pipe(
      windowCount(3),
      map(()=>'每三次觸發'),
      takeUntil(fromEvent(this._ClearWindow.nativeElement, 'click', () => { this.windowResult = '' }))
    ).subscribe(res => {
      this.windowResult += res + ',';
    });
  }

  //WindowTime
  CallWindowTime() {
    interval(1000).pipe(
      windowTime(3000),
      map(() => '每三秒觸發'),
      takeUntil(fromEvent(this._ClearWindow.nativeElement, 'click', () => { this.windowResult = '' }))
    ).subscribe(res => {
      this.windowResult += res + ',';
    });
  }

  //WindowToggle
  CallWindowToggle() {
    //啟動後按住mousedown為顯示計算,mouseup為輸出
    //加入map可針對單次做為統計
    let MouseDownEvent = fromEvent(document, 'mousedown');
    let MouseUpEvent = fromEvent(document, 'mouseup');
    interval(1000).pipe(
      windowToggle(MouseDownEvent, () => MouseUpEvent),
      //map(obj => obj.pipe(count())),
      switchAll(),
      takeUntil(fromEvent(this._ClearWindow.nativeElement, 'click', () => { this.windowResult = '' }))
    ).subscribe(res => {
      this.windowResult += res + ',';
    });
  }

  //WindowWhen
  CallWindowWhen() {
    //將區間中發出的值收集起來,並於觸發後一次輸出
    interval(1000).pipe(
      windowWhen(() => interval(5000)),
      map(obj => obj.pipe(count())),
      switchAll(),
      takeUntil(fromEvent(this._ClearWindow.nativeElement, 'click', () => { this.windowResult = '' }))
    ).subscribe(res => {
      this.windowResult +='發出總數:'+ res + ',';
    });
  }
}
