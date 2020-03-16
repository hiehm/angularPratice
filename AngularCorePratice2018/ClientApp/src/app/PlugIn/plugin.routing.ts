import { Routes } from '@angular/router';
import { PluginComponent } from './plugin/plugin.component';
import { NgxImageCropperPluginComponent } from './ngx-image-cropper-plugin/ngx-image-cropper-plugin.component';
import { NgxSlickCarseoulPlugInComponent } from './ngx-slick-carseoul-plug-in/ngx-slick-carseoul-plug-in.component';
import { Calendar6Component } from './calendar6/calendar6.component';
import { Calendar6CustomWeekModeComponent } from './calendar6-custom-week-mode/calendar6-custom-week-mode.component';
export const PlugInRoutes: Routes = [
    {
        path: '', //path:/home/PlugIn
        component: PluginComponent,
        children: [
            { path: '', component: PluginComponent },
            { path: 'ngxImageCropper', component: NgxImageCropperPluginComponent },
            { path: 'ngxSlickCarseoul', component: NgxSlickCarseoulPlugInComponent },
            { path: 'calendar6', component: Calendar6Component },
            { path: 'calendar6_custom_weekMode', component: Calendar6CustomWeekModeComponent }
        ]
    }
];
