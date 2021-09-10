import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AfterViewInit, OnDestroy } from '@angular/core';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { sum } from 'lodash';
import { Observable, Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { fromEvent } from 'rxjs';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-pratice-counter',
  templateUrl: './rxjs-pratice-counter.component.html',
  styleUrls: ['./rxjs-pratice-counter.component.css']
})
export class RxjsPraticeCounterComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('start') startBtn: ElementRef;
  @ViewChild('count') countBtn: ElementRef;
  @ViewChild('error') errorBtn: ElementRef;
  @ViewChild('complete') completeBtn: ElementRef;
  @ViewChild('status') statusLb: ElementRef;
  @ViewChild('currentCounter') currentCounterLb: ElementRef;
  @ViewChild('evenCounter') evenCounterLb: ElementRef;

  counter: number = 0; //計數器的值
  counter$: Subject<number>;
  evenCounter$: Observable<number>;
  private subscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    fromEvent(this.startBtn.nativeElement, 'click').subscribe(() => {
      this.counter$ = new Subject();
      this.evenCounter$ = this.counter$.pipe(
        filter(data => data % 2 === 0)
      );
      //初始產生新的流訂閱
      this.subscription.add(this.counter$.subscribe(count => {
        this.currentCounterLb.nativeElement.innerHTML = count.toString();
      }, (error) => {
        this.statusLb.nativeElement.innerHTML = `錯誤 -> ${error}`;
      }, () => {
        this.statusLb.nativeElement.innerHTML = '完成';
      }));

      this.subscription.add(this.evenCounter$.subscribe(count => {
        this.evenCounterLb.nativeElement.innerHTML = count.toString();
      }));
      this.counter = 0;
      this.statusLb.nativeElement.innerHTML = '開始計數';
      this.counter$.next(0);
    });

    fromEvent(this.countBtn.nativeElement, 'click').subscribe(() => {
      this.counter$.next(++this.counter);
    });

    fromEvent(this.errorBtn.nativeElement, 'click').subscribe(() => {
      const reason = prompt('請輸入錯誤訊息'); //顯示輸入視窗
      this.counter$.error(reason || 'error');
    });

    fromEvent(this.completeBtn.nativeElement, 'click').subscribe(() => {
      this.counter$.complete();
    });
  }

  ngOnDestroy() {

  }
}
