import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxPieChartComponent } from './ngx-pie-chart/ngx-pie-chart.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsRoutes } from '../Charts/charts.routing';
import { DynamicFlowChartsComponent } from './dynamic-flow-charts/dynamic-flow-charts.component';




@NgModule({
    declarations: [
        ChartsComponent,
        NgxPieChartComponent,
        DynamicFlowChartsComponent
    ],
    imports: [
        CommonModule,
        NgxChartsModule,
        RouterModule.forChild(ChartsRoutes)
    ]
})
export class ChartsModule { }
