import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-web-worker-orb',
    templateUrl: './web-worker-orb.component.html',
    styleUrls: ['./web-worker-orb.component.css']
})
export class WebWorkerOrbComponent implements OnInit {
    //搭載worker物件
    private worker: Worker;
    constructor(
    ) { }

    ngOnInit() {
        if (typeof Worker !== 'undefined') {
            //指定載入web worker檔案路徑
            this.worker = new Worker('../../Utility/webWorker/my-web-worker.worker.ts', { type: 'module' });
            //透過 onmessage取得回傳資料
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
