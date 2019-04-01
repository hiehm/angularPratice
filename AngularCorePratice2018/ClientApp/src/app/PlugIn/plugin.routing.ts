import { Routes } from '@angular/router';
import { PluginComponent } from './plugin/plugin.component';
import { NgxImageCropperPluginComponent } from './ngx-image-cropper-plugin/ngx-image-cropper-plugin.component';
export const PlugInRoutes: Routes = [
  {
    path: '', //path:/home/PlugIn
    component: PluginComponent,
    children: [
      { path: '', component: PluginComponent },
      { path: 'ngxImageCropper', component: NgxImageCropperPluginComponent }
    ]
  }
];
