import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LittleMouseSearchPartialComponent } from './little-mouse-search-partial/little-mouse-search-partial.component';
@NgModule({
  declarations: [
    LittleMouseSearchPartialComponent,
  ],
  exports: [
    LittleMouseSearchPartialComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PartialModule { }
