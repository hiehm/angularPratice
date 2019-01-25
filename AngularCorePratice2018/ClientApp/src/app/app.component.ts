import { Component, OnInit, NgZone } from '@angular/core';
import { slideInDownAnimation } from '../Utility/slideInDownAnimation';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root', //指定此局部頁面內容要插入於Index.html頁面中的哪個元素
  templateUrl: './app.component.html', //指定此局部頁面的模組為哪個html檔案
  styleUrls: ['./app.component.css'], //指定此局部頁面的css來源自哪個css檔案
  animations: [slideInDownAnimation]
})
export class AppComponent implements OnInit {
  title = 'I AM MATT';
  color: string;
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
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
