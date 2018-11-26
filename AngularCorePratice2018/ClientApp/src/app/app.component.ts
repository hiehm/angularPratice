import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //指定此局部頁面內容要插入於Index.html頁面中的哪個元素
  templateUrl: './app.component.html', //指定此局部頁面的模組為哪個html檔案
  styleUrls: ['./app.component.css'] //指定此局部頁面的css來源自哪個css檔案
})
export class AppComponent { //此局部頁面的Component類別名稱
  title = 'I AM MATT';
  color: string;
}
