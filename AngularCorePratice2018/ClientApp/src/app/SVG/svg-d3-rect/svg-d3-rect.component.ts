import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SvgBasic } from '../../../Utility/interfaces/svg/svg-basic';
import { SvgRect } from '../../../Utility/interfaces/svg/svg-rect';
import * as d3 from 'd3';


@Component({
    selector: 'app-svg-d3-rect',
    templateUrl: './svg-d3-rect.component.html',
    styleUrls: ['./svg-d3-rect.component.css']
})
export class SvgD3RectComponent implements OnInit, AfterViewInit {
    data: number[];
    _svg: SvgBasic;
    svgRect: SvgRect;
    constructor() { }

    ngOnInit() {
        this.data = [70, 130, 120, 95, 80, 170, 143];
        this._svg = {
            width: 400,
            height: 400
        };
        this.svgRect = {
            padding: {
                top: 20,
                right: 20,
                left: 20,
                bottom: 20
            },
            rectStep: 35,
            rectWidth: 30,
            maxValue: 200
        };
        this.svgRect.graphicHeight = this._svg.height - this.svgRect.padding.top - this.svgRect.padding.bottom;
    }

    ngAfterViewInit() {
        this.clear();
        this.d3_rect();
    }

    private d3_rect() {
        let svg = d3.select('body')
            .append('svg')
            .attr('width', this._svg.width)
            .attr('height', this._svg.height);
        svg.selectAll('rect')
            .data(this.data)
            .enter()
            .append('rect')
            .attr('fill', '#ff7908')
            .attr('x', (d, i) => {
                return this.svgRect.padding.left + (i * this.svgRect.rectStep)
            })
            .attr('y', (d) => {
                // 畫面高度扣掉長條圖高度作為繪製長條圖的起點
                return this._svg.height - this.svgRect.padding.bottom - this.svgRect.graphicHeight * (d / this.svgRect.maxValue);
            })
            .attr('width', this.svgRect.rectWidth)
            .attr('height', (d) => {
                return this.svgRect.graphicHeight * (d / this.svgRect.maxValue)
            });

        //由此開始加入 text說明文字
    }

    //clear beforce append svg
    private clear() {
        let svg = d3.select('body').select('svg');
        if (!svg.empty()) {
            d3.selectAll('svg').remove();
        }
    }
}
