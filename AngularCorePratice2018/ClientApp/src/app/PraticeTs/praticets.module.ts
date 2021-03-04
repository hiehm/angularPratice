import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilityModule } from '../../Utility/utility.module';
import { RouterModule } from '@angular/router';
import { PraticetsComponent } from './praticets/praticets.component';
import { PraticeTsV4Component } from './pratice-ts-v4/pratice-ts-v4.component';
import { PraticeTsRouters } from './praticets.routing';


@NgModule({
  declarations: [PraticetsComponent, PraticeTsV4Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UtilityModule,
    RouterModule.forChild(PraticeTsRouters)
  ]
})
export class PraticetsModule { }
