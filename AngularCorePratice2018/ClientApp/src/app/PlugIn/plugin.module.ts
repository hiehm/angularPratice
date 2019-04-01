import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';
import { PluginComponent } from './plugin/plugin.component';
import { NgxImageCropperPluginComponent } from './ngx-image-cropper-plugin/ngx-image-cropper-plugin.component';
import { PlugInRoutes } from './plugin.routing';

@NgModule({
  declarations: [
    PluginComponent,
    NgxImageCropperPluginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ImageCropperModule,
    RouterModule.forChild(PlugInRoutes)
  ]
})
export class PluginModule { }
