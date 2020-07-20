import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PraticeComponent } from './pratice/pratice.component';
import { PraticeNgContentComponent } from './pratice-ng-content/pratice-ng-content.component';
import { PartialNgContentComponent } from './partial/partial-ng-content/partial-ng-content.component';
import { RouterModule } from '@angular/router';
import { PraticeRouters } from './pratice.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PraticeComponent,
    PraticeNgContentComponent,
    PartialNgContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(PraticeRouters)
  ]
})
export class PraticeModule { }
