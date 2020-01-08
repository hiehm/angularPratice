import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'app-ngx-pie-chart',
    templateUrl: './ngx-pie-chart.component.html',
    styleUrls: ['./ngx-pie-chart.component.css']
})
export class NgxPieChartComponent implements OnInit {

    view: any[] = [700, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Number';
    showYAxisLabel = true;
    yAxisLabel = 'Color Value';
    timeline = true;

    colorScheme = {
        domain: ['#ff5832', '#51cc92', '#4d5b6b']
    };
    multi: any[] = [
        {
            "name": " 3030 人 (33%)",
            "value": 3030
        },
        {
            "name": " 5030 人 (50%)",
            "value": 5030
        },
        {
            "name": " 1750 人 (17%)",
            "value": 1760
        }
    ];
    constructor() { }

    ngOnInit() {
        console.log(this.multi);
    }

    //e:每次回傳 data 集合中的其中一筆
    testLabelFormatting(text: any) {
        console.log(text);
    }

    selectEl(e: any) {
        console.log(e);
    }

    isActive(data: any) {
        console.log(data);
    }
}
