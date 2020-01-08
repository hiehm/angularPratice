import { Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { NgxPieChartComponent } from './ngx-pie-chart/ngx-pie-chart.component';
import { DynamicFlowChartsComponent } from './dynamic-flow-charts/dynamic-flow-charts.component';

export const ChartsRoutes: Routes = [
    {
        path: '', //path:/home/Charts
        component: ChartsComponent,
        children: [
            { path: '', component: ChartsComponent },
            { path: 'ngxPieCharts', component: NgxPieChartComponent },
            { path: 'dynamicFlowCharts', component: DynamicFlowChartsComponent }
        ]
    }
];
