import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RxjsCollectionComponent } from './rxjs-collection/rxjs-collection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilityModule } from '../../Utility/utility.module';
import { RouterModule } from '@angular/router';
import { RxJSRouters } from './rxjs.routing';


@NgModule({
  declarations: [RxjsCollectionComponent, RxjsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UtilityModule,
    RouterModule.forChild(RxJSRouters)
  ]
})
export class RxjsModule { }
