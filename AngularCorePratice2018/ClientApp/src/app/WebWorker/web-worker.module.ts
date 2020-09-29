import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WebWorkerComponent } from './web-worker/web-worker.component';
import { WebWorkerOrbComponent } from './web-worker-orb/web-worker-orb.component';
import { workerRoute } from './web-worker-routing';



@NgModule({
  declarations: [
    WebWorkerComponent,
    WebWorkerOrbComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(workerRoute)
  ]
})
export class WebWorkerModule { }
