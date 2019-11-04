import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-web-worker-orb',
  templateUrl: './web-worker-orb.component.html',
  styleUrls: ['./web-worker-orb.component.css']
})
export class WebWorkerOrbComponent implements OnInit {
  //private _webWorkService = new WebWorkerService();
  private worker: Worker;
  constructor(
    //private _webWorkerService: WebWorkerService
  ) {

  }

  ngOnInit() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker('../../Utility/webWorker/my-web-worker.worker.ts', { type: 'module' });
      this.worker.onmessage = ({ data }) => {
        console.log('Data', data);
      };
    }
  }

  someCPUHeavyFunction(input: number) {
    return input * 10;
  }

  start() {
    if (!this.worker) {
      return;
    }
    this.worker.postMessage('start');
  }

  end() {
    if (!this.worker) {
      return;
    }
    this.worker.postMessage('end');
  }
}
