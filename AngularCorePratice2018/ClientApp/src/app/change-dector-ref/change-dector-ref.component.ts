import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-change-dector-ref',
  templateUrl: './change-dector-ref.component.html',
  styleUrls: ['./change-dector-ref.component.css']
})
export class ChangeDectorRefComponent implements OnInit {
  i: number;
  tip: string;
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.i = 0;
    this.tip = '開啟變更偵測';
  }
  Detach(): void {
    this.tip = '關閉變更偵測';
    this.changeDetectorRef.detach();
  }
  Reattach(): void {
    this.tip = '開啟變更偵測';
    this.changeDetectorRef.reattach();
  }
  DetectChanges(): void {
    this.changeDetectorRef.detectChanges();
  }
  Add(): void {
    this.i++;
  }
}
