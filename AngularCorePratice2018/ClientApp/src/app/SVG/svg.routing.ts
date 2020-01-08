import { Routes } from '@angular/router';
import { SvgComponent } from './svg/svg.component';
import { SvgBasicComponent } from './svg-basic/svg-basic.component';
import { SvgDefsComponent } from './svg-defs/svg-defs.component';
import { SvgD3BasicComponent } from './svg-d3-basic/svg-d3-basic.component';
import { SvgD3RectComponent } from './svg-d3-rect/svg-d3-rect.component';
import { SvgD3ViewBoxComponent } from './svg-d3-view-box/svg-d3-view-box.component';
import { SvgD3PathComponent } from './svg-d3-path/svg-d3-path.component';

export const SvgRoutes: Routes = [
    {
        path: '', //path:/home/Charts
        component: SvgComponent,
        children: [
            { path: '', component: SvgComponent }
            , { path: 'svgBasic', component: SvgBasicComponent }
            , { path: 'svgD3ViewBox', component: SvgD3ViewBoxComponent }
            , { path: 'svgDefs', component: SvgDefsComponent }
            , { path: 'svgD3Basic', component: SvgD3BasicComponent }
            , { path: 'svgD3Rect', component: SvgD3RectComponent }
            , { path: 'svgD3Path', component: SvgD3PathComponent }
        ]
    }
];
