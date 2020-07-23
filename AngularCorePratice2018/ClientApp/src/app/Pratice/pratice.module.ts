import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PraticeComponent } from './pratice/pratice.component';
import { PraticeNgContentComponent } from './pratice-ng-content/pratice-ng-content.component';
import { PartialNgContentComponent } from './partial/partial-ng-content/partial-ng-content.component';
import { RouterModule } from '@angular/router';
import { PraticeRouters } from './pratice.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PraticeCallWebAPIComponent } from './pratice-call-web-api/pratice-call-web-api.component';
import { PraticeNgPluralComponent } from './pratice-ng-plural/pratice-ng-plural.component';
import { PraticeNgSelectOptionComponent } from './pratice-ng-select-option/pratice-ng-select-option.component';
import { UtilityModule } from '../../Utility/utility.module';



@NgModule({
  declarations: [
    PraticeComponent,
    PraticeNgContentComponent,
    PartialNgContentComponent,
    PraticeCallWebAPIComponent,
    PraticeNgPluralComponent,
    PraticeNgSelectOptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UtilityModule,
    RouterModule.forChild(PraticeRouters)
  ]
})
export class PraticeModule { }
