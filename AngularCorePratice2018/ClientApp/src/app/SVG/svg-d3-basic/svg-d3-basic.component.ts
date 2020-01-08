import { Component, OnInit, AfterViewInit, AfterContentInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
@Component({
    selector: 'app-svg-d3-basic',
    templateUrl: './svg-d3-basic.component.html',
    styleUrls: ['./svg-d3-basic.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SvgD3BasicComponent implements OnInit, AfterContentInit, AfterViewInit {
    data: string[];
    data2: number[];
    constructor() { }

    ngOnInit() {
        this.data = ['MATT', 'MARY', 'Ilandy'];
        this.data2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }

    ngAfterViewInit() {
        let svg = d3.select('svg');
        svg.classed('title', true)
            .append('circle')
            .attr('cx', '50px')
            .attr('cy', '50px')
            .attr('r', '50px')
            .attr('fill', 'red');

        this.d3_dataJoin_datum();
        this.d3_dataJoin_data();
        this.d3_dataJoin_Enter_Example();
        this.d3_Enter_Update();
        this.d3_Upadte_Exit();
    }
    ngAfterContentInit() {

    }

    private d3_dataJoin_datum() {
        d3.selectAll('li').datum('資料').text((d,i)=> {
            return d + ' ' + i;
        });
    }

    private d3_dataJoin_data() {
        d3.select('ul[id="ul2"]').selectAll('li').data(this.data).text((d,i)=> {
            return d + ' ' + i;
        });
    }

    private d3_dataJoin_Enter_Example() {
        d3.select('ul[id="ulEnter"]').selectAll('li')
            .data(this.data)
            .enter()
            .append('li')
            .text((d, i) => {
                return d + ' ' + i;
            });
    }

    private d3_Enter_Update() {
        let els = d3.select('div[id="labelContainer"]').selectAll('label');
        let update = els.data(this.data2);
        update.text((d) => {
            return 'update: ' + d;
        });
        console.log('update', update);

        let enter = update.enter();
        enter.append('label').text((d) => {
            return 'enter: ' + d;
        });
        console.log('enter', enter);
    }

    private d3_Upadte_Exit() {
        let els = d3.select('div[id="labelContainer2"]').selectAll('label');
        let update = els.data(this.data2);
        update.text((d) => {
            return 'update: ' + d;
        });
        console.log('update', update);

        let exit = update.exit();
        exit.text(() => {
            return 'this. is exit';
        });
        console.log('exit', exit);
        exit.remove();
    }
}
