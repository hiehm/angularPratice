import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LittleMouseSearchPartialComponent } from './little-mouse-search-partial/little-mouse-search-partial.component';
import { LittleMouseSearchByCdkOverlayComponent } from './little-mouse-search-by-cdk-overlay/little-mouse-search-by-cdk-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
@NgModule({
  declarations: [
    LittleMouseSearchPartialComponent,
    LittleMouseSearchByCdkOverlayComponent,
  ],
  imports: [
    CommonModule,
    OverlayModule //cdkOverlay
  ],
  exports: [
    LittleMouseSearchPartialComponent,
    LittleMouseSearchByCdkOverlayComponent,
  ],

})
export class PartialModule { }
