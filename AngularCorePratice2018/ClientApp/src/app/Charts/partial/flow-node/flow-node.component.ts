import { Component, OnInit, Input } from '@angular/core';
import { FlowTreeNode } from '../../../../Utility/interfaces/Charts/flow-tree-node';
import { DynamicFlowService } from '../../../../Service/dynamic-flow.service';
@Component({
    selector: 'app-flow-node',
    templateUrl: './flow-node.component.html',
    styleUrls: ['./flow-node.component.css']
})
export class FlowNodeComponent implements OnInit {
    @Input() node: string;
    @Input() node_index?: number;
    tempData: FlowTreeNode;
    constructor() { }

    ngOnInit() {
    }


    addChild(node: FlowTreeNode) {
        node.children.push(this.getTempData());
        DynamicFlowService.last_Id = this.tempData.id;
      //  console.log(id);
    }

    getTempData() {
        let id = DynamicFlowService.last_Id + 1;
        this.tempData = {
            name: `TEMP ${id}`,
            id: id,
            children:[]
        }
        return this.tempData;
    }
}
