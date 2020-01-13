import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxPieChartComponent } from './ngx-pie-chart/ngx-pie-chart.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsRoutes } from '../Charts/charts.routing';
import { DynamicFlowChartsComponent } from './dynamic-flow-charts/dynamic-flow-charts.component';
import { DynamicFlowShowButtonDirective } from '../../Directive/dynamic-flow-show-button.directive';
import { FlowNodeComponent } from './partial/flow-node/flow-node.component';



@NgModule({
    declarations: [
        ChartsComponent,
        NgxPieChartComponent,
        DynamicFlowChartsComponent,
        DynamicFlowShowButtonDirective,
        FlowNodeComponent
    ],
    imports: [
        CommonModule,
        NgxChartsModule,
        RouterModule.forChild(ChartsRoutes)
    ]
})
export class ChartsModule { }
