import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
//import { AngularFireModule } from '@angular/fire';
//import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';  //ReactiveForms
import { FormsModule } from '@angular/forms';// <-- NgModel、Event$ lives here
import { PartialModule } from './Partial/partial.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VoteComponent } from './vote/vote.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { HighlightDirective } from '../Directive/highlight.directive';
import { CutStructDirective } from '../Directive/cut-struct.directive';
import { ExportDirectiveDirective } from '../Directive/export-directive.directive';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { ValidDemoComponent } from './valid-demo/valid-demo.component';
import { ValidReactiveFormComponent } from './valid-reactive-form/valid-reactive-form.component';
import { HttpclientTestComponent } from './httpclient-test/httpclient-test.component';
import { SubDashboardComponent } from './sub-dashboard/sub-dashboard.component';
import { HeroesModule } from './heroes/heroes.module';
import { MyControlComponentComponent } from './my-control-component/my-control-component.component';
import { MyControlMasterComponent } from './my-control-master/my-control-master.component';
import { DynamicLoadingComponent } from './dynamic-loading/dynamic-loading.component';
import { AppHttpInterceporService } from './app-http-intercepor.service';
import { ErrorLogHandler } from '../Utility/ErrorLogHandler';
import { AppINITIALZERService } from './app-initialzer.service';
import { ChangeDectorRefComponent } from './change-dector-ref/change-dector-ref.component';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy/change-detection-strategy.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { RxjsCollectionComponent } from './rxjs-collection/rxjs-collection.component';
import { AnimationComponent } from './animation/animation.component';
import { LittleMouseSearchComponent } from './little-mouse-search/little-mouse-search.component';
import { UrlMetadataParserComponent } from './url-metadata-parser/url-metadata-parser.component';
import { AcceptOtherPostComponent } from './accept-other-post/accept-other-post.component';
import { FirebaseTestComponent } from './firebase-test/firebase-test.component';
import { environment } from '../environments/environment';
//import { FirebaseHttpService } from '../Service/firebase-http.service';

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
    SubDashboardComponent,
    MyControlComponentComponent,
    MyControlMasterComponent,
    ExportDirectiveDirective,
    DynamicLoadingComponent,
    ChangeDectorRefComponent,
    ChangeDetectionStrategyComponent,
    AsyncPipeComponent,
    RxjsCollectionComponent,
    AnimationComponent,
    LittleMouseSearchComponent,
    UrlMetadataParserComponent,
    AcceptOtherPostComponent,
    FirebaseTestComponent,
    
    //HeroListComponent,
    //HeroDetailRComponent
  ],
  imports: [
    BrowserModule,
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule,
    HeroesModule, //自訂Module 順序必須優於AppRoutingModule
    BrowserAnimationsModule, //添加動畫效果模組
    ////NoopAnimationsModule,  //取消動畫效果模組
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PartialModule
  ],
  // entryComponents: [DynamicLoadingComponent],
  providers: [
    {
      //Http 請求前與回應後全域處理常式
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceporService,
      multi: true,
    },
    {
      //Error 全域錯誤處理常式
      provide: ErrorHandler,
      useClass: ErrorLogHandler
    },
   // FirebaseHttpService
    //{
    //  //APP_INITIALZER 程式執行前先行運行設定
    //  provide: APP_INITIALIZER,
    //  useFactory: (configService: AppINITIALZERService) => () => configService.initData(),
    //  deps: [AppINITIALZERService],
    //  multi: true
    //}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
