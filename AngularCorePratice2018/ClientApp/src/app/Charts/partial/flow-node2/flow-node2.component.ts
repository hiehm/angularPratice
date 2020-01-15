import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { FlowTreeNode } from '../../../../Utility/interfaces/Charts/flow-tree-node';
import { DynamicFlowService } from '../../../../Service/dynamic-flow.service';

@Component({
  selector: 'app-flow-node2',
  templateUrl: './flow-node2.component.html',
  styleUrls: ['./flow-node2.component.css']
})
export class FlowNode2Component implements OnInit {
    @Input() node: string;
    @Input() node_index?: number;
    tempData: FlowTreeNode;
    constructor(private _renderer: Renderer2) { }

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
            children: []
        }
        return this.tempData;
    }

    simpleClick(node: any) {
        let elList = document.querySelectorAll('div.simple-card-not-highlighted');
        elList.forEach(x => this._renderer.removeClass(x, 'simple-box-shadow'));
        this._renderer.addClass(node, 'simple-box-shadow');
    }
}
