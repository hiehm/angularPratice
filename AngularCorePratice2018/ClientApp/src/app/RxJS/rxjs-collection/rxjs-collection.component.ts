import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpperCasePipe } from '@angular/common';
import { RxJsModeEnum } from '../../../Utility/enums/code-generator-enum';
import { Observable, combineLatest, forkJoin, Subject, interval, timer, fromEvent, empty, of, from, concat } from 'rxjs';
import { map, tap, take, switchMap, shareReplay, debounceTime, distinctUntilChanged, filter, combineAll, takeUntil, skip, takeLast, bufferTime, bufferCount, distinct, zip, catchError, repeat, concatAll, concatMap, merge, mergeAll, delay, mergeMap, window, count, switchAll, windowToggle, windowCount, windowTime, windowWhen, groupBy, reduce, publish, refCount, share, pairwise, race, defaultIfEmpty, every } from 'rxjs/operators';

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
  @ViewChild('ClearWindow', { static: false }) _ClearWindow: ElementRef;
  RxJsModeEnum: typeof RxJsModeEnum = RxJsModeEnum;
  RxJsMode: RxJsModeEnum = RxJsModeEnum.step1;
  bufferResult: string;
  bufferFuncName: string;
  catchResult: string;
  combineAllResult: Array<string[]>;
  concatMethods: string;
  concatResult: string;
  distinctResult: string;
  defaultIfEmptyResult: string;
  everyResult: string;
  groupbyResult: any;
  mergeMethods: string;
  mergeResult: string;
  pairwiseResult: string;
  raceResult: string;
  subjectResult: string;
  takeUntilResult: string;
  takeLastResult: string;
  windowResult: string;
  data$: Observable<any[]>;
  data2$: Observable<any[]>;
  data3$: Observable<any[]>;
  funcName: string;
  debounceTimeStr: Observable<any>;
  private searchTerms = new Subject<string>(); //????????????Subject
  private _subjectBySubject = new Subject();
  private _takeUntilButtonEvent = new Subject();
  private upperPipe: UpperCasePipe;
  private readonly API_URL = 'https://api.github.com/users';
  private readonly API_URL2 = 'https://jsonplaceholder.typicode.com/todos/';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.upperPipe = new UpperCasePipe();
    //string???????????????undefined
    this.takeUntilResult = '';
    this.takeLastResult = '';
    this.bufferResult = '';
    this.catchResult = '';
    this.combineAllResult = new Array<string[]>();
    this.concatResult = '';
    this.concatMethods = '';
    this.defaultIfEmptyResult = '';
    this.distinctResult = '';
    this.everyResult = '';
    this.groupbyResult = '';
    this.mergeMethods = '';
    this.mergeResult = '';
    this.pairwiseResult = '';
    this.raceResult = '';
    this.subjectResult = '';
    this.windowResult = '';
    this.data$ = this.httpClient.get<any[]>(this.API_URL2).pipe(
      map(data => data.splice(0, 10))
    );
    this.debounceTimeStr = this.searchTerms.pipe(
      //????????????,?????????????????????1000???????????????????????????
      debounceTime(1000),
      // ????????????????????????????????????
      distinctUntilChanged(),
      //??????????????????????????????????????????
      filter(x => x.length >= 3),
      map(x => x)
    );
    this._subjectBySubject.subscribe((data) => {
      this.subjectResult += 'SubjectA:' + data + ',';
    });
    this._subjectBySubject.subscribe((data) => {
      this.subjectResult += 'SubjectB:' + data + ',';
    });
  }


  changeRxJsMode(mode: RxJsModeEnum) {
    console.log(mode);
    this.RxJsMode = mode;
  }

  //buffer-bufferTime
  CallbufferTime() {
    this.bufferResult = '';
    this.bufferFuncName = 'bufferTime';
    interval(300).pipe(
      //????????????????????????
      bufferTime(1000),
      takeUntil(timer(5000))
    ).subscribe(res => {
      this.bufferResult += `[${res}]???`;
    });
  }

  //buffer-bufferCount
  CallbufferCount() {
    this.bufferResult = '';
    this.bufferFuncName = 'bufferCount';
    interval(300).pipe(
      //??????????????????????????????,????????????
      bufferCount(4),
      takeUntil(timer(5000))
    ).subscribe(res => {
      this.bufferResult += `[${res}]???`;
    });
  }

  //buffer-Button bufferTime
  CallBtnbufferTime() {
    this.bufferFuncName = '??????????????????';
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
    //['1', '2', '3', '4', 5] ??????????????????????????????
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
    //???????????????
    let source = interval(1000).pipe(take(2));
    let example = source.pipe(
      map(val => interval(1000).pipe(map(i => `Result(${val}):${i}`), take(5)))
    );
    const combined = example.pipe(combineAll());
    const subscribe = combined.subscribe(val => this.combineAllResult.push(val));
  }

  //concat:?????????Observable????????????????????????
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
      console.log(res);
      this.concatMethods = 'Concat';
      this.concatResult += 'Source' + res.Source + ':' + res.value + ',';
    });
  }

  //concatAll:??????????????????????????????
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

  //concatMap:map+concatAll
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

  //DefaultIfEmpty
  CallDefaultIfEmpty() {
    of().pipe(
      defaultIfEmpty('this observable is empty!')
    ).subscribe(res => {
      this.defaultIfEmptyResult += res;
    });
  }

  //Distinct - Filter For Array
  CallDistinctByArray() {
    //????????????Observable Array
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

  //Every
  CallEvery() {

    let source = of(1, 2, 3, 4, 5);
    this.everyResult += `[1,2,3,4,5]`;
    source.pipe(
      every(val => val <= 5)
    ).subscribe(res => {
      this.everyResult += `\n??????????????????<=5:${res}`;
    });
    source.pipe(
      every(val => val % 2 === 0)
    ).subscribe(res => {
      this.everyResult += `\n??????????????????%2===0:${res}`;
    });
  }

  //Map
  CallMap() {
    this.data$ = this.data$.pipe(
      //map?????????
      tap(data => console.log(data)),
      //map?????????????????????????????????
      //data.map??????javascript???map,???????????????????????????
      map(data => data.map(x => x.title)),
      //map?????????
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

  //SwitchMap
  CallswitchMap() {
    this.data$ = this.data$.pipe(
      shareReplay(1),
      //????????????Observable,?????????????????????????????????Observable
      switchMap(() => this.httpClient.get<any[]>(this.API_URL2))
    );
    this.funcName = 'switchMap';
  }

  //CombineLatest
  CallcombineLatest() {
    this.data2$ = this.httpClient.get<any[]>(this.API_URL2);
    this.data3$ = this.httpClient.get<any[]>(this.API_URL);
    //???combineLatest ?????????rxJs??????
    //?????????Observable??????????????????,????????????????????????
    this.data$ = combineLatest(this.data2$, this.data3$).pipe(
      //????????????Http???????????????,?????????????????????
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
    //???forkJoin ?????????rxJs??????
    //?????????Observable?????????Complete?????????????????????
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
      //groupBy ???????????????????????????,??????map??????????????????
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

  //Race
  CallRace() {
    interval(5000).pipe(
      defaultIfEmpty(),
      race(
        interval(1500),
        interval(1000),
        interval(500),
        interval(3000)),
      take(5)
    ).subscribe(res => {
      this.raceResult += res + ',';
    });
  }

  //Pairwiese
  CallPairwise() {
    interval(1000).pipe(
      pairwise(),
      take(5)
    ).subscribe(res => {
      this.pairwiseResult += `[${res}],`;
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
    //map(obj=>obj.pipe(count())),???1??????Click????????????
    //switchAll ??????Observable<Observable<T>>?????????
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
    //windowCount ?????????N???????????????,???????????????
    interval(1000).pipe(
      windowCount(3),
      map(() => '???????????????'),
      takeUntil(fromEvent(this._ClearWindow.nativeElement, 'click', () => { this.windowResult = '' }))
    ).subscribe(res => {
      this.windowResult += res + ',';
    });
  }

  //WindowTime
  CallWindowTime() {
    interval(1000).pipe(
      windowTime(3000),
      map(() => '???????????????'),
      takeUntil(fromEvent(this._ClearWindow.nativeElement, 'click', () => { this.windowResult = '' }))
    ).subscribe(res => {
      this.windowResult += res + ',';
    });
  }

  //WindowToggle
  CallWindowToggle() {
    //???????????????mousedown???????????????,mouseup?????????
    //??????map???????????????????????????
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
    //????????????????????????????????????,???????????????????????????
    interval(1000).pipe(
      windowWhen(() => interval(5000)),
      map(obj => obj.pipe(count())),
      switchAll(),
      takeUntil(fromEvent(this._ClearWindow.nativeElement, 'click', () => { this.windowResult = '' }))
    ).subscribe(res => {
      this.windowResult += '????????????:' + res + ',';
    });
  }
}
