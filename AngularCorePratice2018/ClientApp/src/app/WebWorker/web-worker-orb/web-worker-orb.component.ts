import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-web-worker-orb',
  templateUrl: './web-worker-orb.component.html',
  styleUrls: ['./web-worker-orb.component.css']
})
export class WebWorkerOrbComponent implements OnInit {
  //搭載worker物件
  showAr: string[] = [];
  private worker: Worker;
  constructor(
  ) { }

  ngOnInit() {
    if (typeof Worker !== 'undefined') {
      //指定載入web worker檔案路徑
      this.worker = new Worker('../../../Utility/webWorker/my-web-worker.worker.ts', { type: 'module' });
      //透過 onmessage取得回傳資料
      this.worker.onmessage = ({ data }) => {
        console.log('Data', data.msg);
        this.showAr.push(`${data.msg} ${data.count}`);
        if (data.count === 10000) {
          this.showAr.push(`worker endTime:${new Date().toISOString()}`);
          console.log('worker endTime:', new Date().toISOString());
        }
      };

    }
  }

  someCPUHeavyFunction(input: number) {
    return input * 10;
  }

  noWorkerstart() {
    this.showAr = [];
    this.showAr.push(`startTime:${new Date().toISOString()}`);
    console.log('startTime:', new Date().toISOString());
    for (let i = 1; i <= 10000; i++) {
      this.showAr.push(`not worker: ${i}`);
      console.log('s');
    }
    this.showAr.push(`endTime:${new Date().toISOString()}`);
    console.log('endTime:', new Date().toISOString());
  }

  start() {
    if (!this.worker) {
      return;
    }
    this.showAr = [];
    this.showAr.push(`worker startTime:${new Date().toISOString()}`);
    console.log('worker startTime:', new Date().toISOString());
    this.worker.postMessage('start');

  }

  end() {
    if (!this.worker) {
      return;
    }
   // this.worker.postMessage('end');
    this.worker.terminate();
  }
}
