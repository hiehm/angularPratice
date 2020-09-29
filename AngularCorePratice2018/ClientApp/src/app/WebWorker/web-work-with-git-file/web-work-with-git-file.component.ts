import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-work-with-git-file',
  templateUrl: './web-work-with-git-file.component.html',
  styleUrls: ['./web-work-with-git-file.component.css']
})
export class WebWorkWithGitFileComponent implements OnInit {

  title = 'ngWorker';
  private worker: Worker;

  ngOnInit() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker('../../../Utility/webWorker/web-work-with-git-file.worker.ts', { type: 'module' });
      // 監聽訊息
      this.worker.onmessage = ({ data }) => {
        console.log('Data:', data);
      };
    }
  }

  start() {
    if (!this.worker) {
      return;
    }
    this.worker.postMessage('start');
  }

  stop() {
    if (!this.worker) {
      return;
    }
    this.worker.postMessage('stop');
  }

}
