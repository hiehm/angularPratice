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

    //預計寫成 directive
    mouseenter(el: MouseEvent) {
        const _srcEl = (el.srcElement as HTMLElement).children[0];
        this.renderer2.removeClass(_srcEl, 'dis-none');
    }

    mouseleave(el: MouseEvent) {
        const _srcEl = (el.srcElement as HTMLElement).children[0];
        this.renderer2.addClass(_srcEl, 'dis-none');
    }
}
