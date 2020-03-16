import { Routes } from '@angular/router';
import { PluginComponent } from './plugin/plugin.component';
import { NgxImageCropperPluginComponent } from './ngx-image-cropper-plugin/ngx-image-cropper-plugin.component';
import { NgxSlickCarseoulPlugInComponent } from './ngx-slick-carseoul-plug-in/ngx-slick-carseoul-plug-in.component';
import { Calendar6Component } from './calendar6/calendar6.component';
export const PlugInRoutes: Routes = [
    {
        path: '', //path:/home/PlugIn
        component: PluginComponent,
        children: [
            { path: '', component: PluginComponent },
            { path: 'ngxImageCropper', component: NgxImageCropperPluginComponent },
            { path: 'ngxSlickCarseoul', component: NgxSlickCarseoulPlugInComponent },
            { path: 'calendar6', component: Calendar6Component }
        ]
    }
];
