import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PraticejsComponent } from './praticejs/praticejs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilityModule } from '../../Utility/utility.module';
import { PraticeJsRouters } from './praticejs.routing';
import { PraticejsReflectComponent } from './praticejs-reflect/praticejs-reflect.component';
import { PraticejsMapAndSetComponent } from './praticejs-map-and-set/praticejs-map-and-set.component';




@NgModule({
  declarations: [PraticejsComponent, PraticejsReflectComponent, PraticejsMapAndSetComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UtilityModule,
    RouterModule.forChild(PraticeJsRouters)
  ]
})
export class PraticejsModule { }
