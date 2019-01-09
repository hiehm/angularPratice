import { Component,OnInit, NgZone} from '@angular/core';

@Component({
  selector: 'app-root', //指定此局部頁面內容要插入於Index.html頁面中的哪個元素
  templateUrl: './app.component.html', //指定此局部頁面的模組為哪個html檔案
  styleUrls: ['./app.component.css'] //指定此局部頁面的css來源自哪個css檔案
})
export class AppComponent implements OnInit {
  constructor(private zone: NgZone) {

  }
  ngOnInit() {
    this.zone.onUnstable.subscribe(() => { console.log('Event Happening') });
    this.zone.onStable.subscribe(() => { console.log('Event Over') });
    this.zone.runOutsideAngular(() => {
      // 進行跟 UI 無關的複雜運算
      console.log('runOutsideAngular');
    });
  }
  title = 'I AM MATT';
  color: string;
}
