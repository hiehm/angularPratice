import { Component, OnInit, Renderer2 } from '@angular/core';
import { FlowTreeList } from '../../../Utility/interfaces/Charts/flow-tree-list';
import * as _ from 'lodash';
import { FlowTreeNode } from '../../../Utility/interfaces/Charts/flow-tree-node';
import { DynamicFlowService } from '../../../Service/dynamic-flow.service';

@Component({
  selector: 'app-dynamic-flow-charts',
  templateUrl: './dynamic-flow-charts.component.html',
  styleUrls: ['./dynamic-flow-charts.component.css']
})
export class DynamicFlowChartsComponent implements OnInit {
  data: FlowTreeList;
  lastId: number = 0;
  mode: number = 1;
  newObj = { a: 100, b: 'ss' };
  constructor(private renderer2: Renderer2) { }

  ngOnInit() {
    this.data = {
      name: 'root',
      children: [{
        name: 'MATT',
        id: 1,
        children: [{
          name: 'MARY',
          id: 2,
          children: [{
            name: 'MIKE',
            id: 5,
            children: []
          }, {
            name: 'MILE',
            id: 6,
            children: [{
              name: 'Mil',
              id: 9,
              children: []
            }, {
              name: 'Mil 2',
              id: 10,
              children: []

            }, {
              name: 'Mil 3',
              id: 11,
              children: []
            }]
          }]
        }, {
          name: 'Spear',
          id: 3,
          children: [{
            name: 'Sp 1',
            id: 15,
            children: []
          }]
        }, {
          name: 'Wpear',
          id: 4,
          children: [{
            name: 'Wish',
            id: 7,
            children: [{
              name: 'Wi 1',
              id: 18,
              children: []
            }]
          }, {
            name: 'Wand',
            id: 8,
            children: []
          }]
        }]
      }]
    };
    this.findLastId(this.data.children[0]);
    DynamicFlowService.last_Id = this.lastId;
    console.log(DynamicFlowService.last_Id);
    this.data.children = this.nestedMap(this.data.children);
    console.log(this.data);
  }

  /**
   *  變更巢狀物件中所有屬性
   * @param children
   */
  nestedMap(children: FlowTreeNode[]) {
    return children.map((u, i) => {
      children = this.nestedMap(u.children);
      return {
        children,
        a: ( i > 0 ? 100 : 50),
        name: u.name,
        id: 1
      }
    });
  }

  onModeChange(val: any) {
    this.mode = val;
  }

  //recursive find last id
  private findLastId(flowNodeArray: FlowTreeNode) {
    if (flowNodeArray.children.length <= 0) {
      if (flowNodeArray.id > this.lastId) {
        this.lastId = flowNodeArray.id;
      }
    } else {
      for (let v in flowNodeArray.children) {
        this.findLastId(flowNodeArray.children[v]);
      }
    }
  }

}
