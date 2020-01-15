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
import { FlowNode2Component } from './partial/flow-node2/flow-node2.component';



@NgModule({
    declarations: [
        ChartsComponent,
        NgxPieChartComponent,
        DynamicFlowChartsComponent,
        DynamicFlowShowButtonDirective,
        FlowNodeComponent,
        FlowNode2Component
    ],
    imports: [
        CommonModule,
        NgxChartsModule,
        RouterModule.forChild(ChartsRoutes)
    ]
})
export class ChartsModule { }
