import { Component, OnInit, Renderer2 } from '@angular/core';
import { FlowTreeList } from '../../../Utility/interfaces/Charts/flow-tree-list';
import { id } from '@swimlane/ngx-charts/release/utils';

@Component({
    selector: 'app-dynamic-flow-charts',
    templateUrl: './dynamic-flow-charts.component.html',
    styleUrls: ['./dynamic-flow-charts.component.css']
})
export class DynamicFlowChartsComponent implements OnInit {
    data: FlowTreeList;
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
                    children: []
                }, {
                    name: 'Wpear',
                    id: 4,
                    children: [{
                        name: 'Wish',
                        id: 7,
                        children: []
                    }, {
                        name: 'Wand',
                        id: 8,
                        children: []
                    }]
                }]
            }]
        };
    }
}
