import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LittleMouseSearchPartialComponent } from './little-mouse-search-partial/little-mouse-search-partial.component';
import { LittleMouseSearchByCdkOverlayComponent } from './little-mouse-search-by-cdk-overlay/little-mouse-search-by-cdk-overlay.component';
@NgModule({
  declarations: [
    LittleMouseSearchPartialComponent,
    LittleMouseSearchByCdkOverlayComponent
  ],
  exports: [
    LittleMouseSearchPartialComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PartialModule { }
