import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';  //ReactiveForms
import { FormsModule } from '@angular/forms';// <-- NgModel、Event$ lives here
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VoteComponent } from './vote/vote.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { HighlightDirective } from '../Directive/highlight.directive';
import { CutStructDirective } from '../Directive/cut-struct.directive';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { ValidDemoComponent } from './valid-demo/valid-demo.component';
import { ValidReactiveFormComponent } from './valid-reactive-form/valid-reactive-form.component';
import { HttpclientTestComponent } from './httpclient-test/httpclient-test.component';
import { SubDashboardComponent } from './sub-dashboard/sub-dashboard.component';
import { HeroesModule } from './heroes/heroes.module'; //自訂Hero Module
//import { HeroListComponent } from './heroes/hero-list/hero-list.component'; //自訂Module無須引入Component
//import { HeroDetailRComponent } from './heroes/hero-detail-r/hero-detail-r.component';
@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    VoteComponent,
    VoteTakerComponent,
    HighlightDirective,
    CutStructDirective,
    HeroSearchComponent,
    ValidDemoComponent,
    ValidReactiveFormComponent,
    HttpclientTestComponent,
    SubDashboardComponent
    //HeroListComponent,
    //HeroDetailRComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule, //自訂Module 順序必須優於AppRoutingModule
    BrowserAnimationsModule, //添加動畫效果模組
    //NoopAnimationsModule,  //取消動畫效果模組
 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
