import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilityModule } from '../../Utility/utility.module';
import { PraticejsComponent } from './praticejs/praticejs.component';
import { PraticejsReflectComponent } from './praticejs-reflect/praticejs-reflect.component';
import { PraticejsMapAndSetComponent } from './praticejs-map-and-set/praticejs-map-and-set.component';
import { PraticeJsRouters } from './praticejs.routing';
import { PraticejsRegularExpressionComponent } from './praticejs-regular-expression/praticejs-regular-expression.component';





@NgModule({
  declarations: [
    PraticejsComponent,
    PraticejsReflectComponent,
    PraticejsMapAndSetComponent,
    PraticejsRegularExpressionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UtilityModule,
    RouterModule.forChild(PraticeJsRouters)
  ]
})
export class PraticejsModule { }
