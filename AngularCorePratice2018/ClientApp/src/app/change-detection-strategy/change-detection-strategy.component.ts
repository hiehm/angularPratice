import { Component, OnInit, Input, ChangeDetectionStrategy  } from '@angular/core';

@Component({
  selector: 'app-change-detection-strategy',
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionStrategyComponent implements OnInit {
  data: { count: number };
  constructor() { }

  ngOnInit() {
    this.data =  { count: 0 };
  }
  AddData(): void {
    console.log('add');
    this.data.count += 1;
  }
}
