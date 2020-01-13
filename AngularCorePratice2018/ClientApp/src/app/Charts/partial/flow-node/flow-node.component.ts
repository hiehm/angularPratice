import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-flow-node',
    templateUrl: './flow-node.component.html',
    styleUrls: ['./flow-node.component.css']
})
export class FlowNodeComponent implements OnInit {
    @Input() node: string;
    @Input() node_index?: number;
    constructor() { }

    ngOnInit() {
    }


    addChild(id: number) {

    }
}
