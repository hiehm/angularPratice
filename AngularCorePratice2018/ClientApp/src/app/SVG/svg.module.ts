import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg/svg.component';
import { SvgBasicComponent } from './svg-basic/svg-basic.component';
import { SvgRoutes } from './svg.routing';
import { SvgDefsComponent } from './svg-defs/svg-defs.component';
import { SvgD3BasicComponent } from './svg-d3-basic/svg-d3-basic.component';
import { SvgD3RectComponent } from './svg-d3-rect/svg-d3-rect.component';
import { SvgD3ViewBoxComponent } from './svg-d3-view-box/svg-d3-view-box.component';
import { SvgD3PathComponent } from './svg-d3-path/svg-d3-path.component';




@NgModule({
  declarations: [SvgComponent, SvgBasicComponent, SvgDefsComponent, SvgD3BasicComponent, SvgD3RectComponent, SvgD3ViewBoxComponent, SvgD3PathComponent],
  imports: [
      CommonModule,
      RouterModule.forChild(SvgRoutes)
  ]
})
export class SvgModule { }
