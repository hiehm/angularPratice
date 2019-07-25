import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';
import { PluginComponent } from './plugin/plugin.component';
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule,
    ImageCropperModule,
    RouterModule.forChild(PlugInRoutes)
  ]
})
export class PluginModule { }
