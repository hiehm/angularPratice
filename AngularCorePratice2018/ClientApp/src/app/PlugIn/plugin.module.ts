import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PluginComponent } from './plugin/plugin.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxImageCropperPluginComponent } from './ngx-image-cropper-plugin/ngx-image-cropper-plugin.component';
import { PlugInRoutes } from './plugin.routing';
import { NgxSlickCarseoulPlugInComponent } from './ngx-slick-carseoul-plug-in/ngx-slick-carseoul-plug-in.component';
import { Calendar6Component } from './calendar6/calendar6.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


@NgModule({
  declarations: [
    PluginComponent,
    NgxImageCropperPluginComponent,
    NgxSlickCarseoulPlugInComponent,
    Calendar6Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ImageCropperModule,
      SlickCarouselModule,
      CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    RouterModule.forChild(PlugInRoutes)
  ]
})
export class PluginModule { }
