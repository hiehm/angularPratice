import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-dynamic-flow-charts',
    templateUrl: './dynamic-flow-charts.component.html',
    styleUrls: ['./dynamic-flow-charts.component.css']
})
export class DynamicFlowChartsComponent implements OnInit {

    constructor(private renderer2: Renderer2) { }

    ngOnInit() {
    }
}
