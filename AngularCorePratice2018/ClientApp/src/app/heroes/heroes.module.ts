//自訂Module
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailRComponent } from './hero-detail-r/hero-detail-r.component';

import { HeroesRoutingModule } from './heroes-routing.module'; //將自訂Router Module加入

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailRComponent
  ]
})
export class HeroesModule { }
