import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; //加入CommonModule
import { HerosComponent } from '../app/heros/heros.component'; //加入HerosComponent
import { HeroDetailComponent } from '../app/hero-detail/hero-detail.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component'; //加入DashBoardComponent
import { VoteTakerComponent } from '../app/vote-taker/vote-taker.component';
import { ValidDemoComponent } from '../app/valid-demo/valid-demo.component';
import { ValidReactiveFormComponent } from '../app/valid-reactive-form/valid-reactive-form.component';
import { HttpclientTestComponent } from '../app/httpclient-test/httpclient-test.component';
import { MyControlMasterComponent } from '../app/my-control-master/my-control-master.component';
import { DynamicLoadingComponent } from '../app/dynamic-loading/dynamic-loading.component';
import { ChangeDectorRefComponent } from './change-dector-ref/change-dector-ref.component';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy/change-detection-strategy.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { RxjsCollectionComponent } from './rxjs-collection/rxjs-collection.component';
import { AnimationComponent } from './animation/animation.component';
import { LittleMouseSearchComponent } from './little-mouse-search/little-mouse-search.component';
import { UrlMetadataParserComponent } from './url-metadata-parser/url-metadata-parser.component';
import { AcceptOtherPostComponent } from './accept-other-post/accept-other-post.component';
import { FirebaseTestComponent } from './firebase-test/firebase-test.component';

const routes: Routes = [ //建構Routes規則
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } //頁面載入時,預設跳轉的Route
  //{ path: 'heros', component: HerosComponent } //設定Route路徑與顯示的Component
  , { path: 'dashboard', component: DashboardComponent }
  , { path: 'HttpClientTest', component: HttpclientTestComponent }
  , { path: 'VoteTaker', component: VoteTakerComponent }
  , { path: 'ValidDemo', component: ValidDemoComponent }
  , { path: 'ValidReactiveDemo', component: ValidReactiveFormComponent }
  , { path: 'detail/:id', component: HeroDetailComponent }
  , { path: 'MyCustomControl', component: MyControlMasterComponent }
  , { path: 'DynamicLoading', component: DynamicLoadingComponent }
  , { path: 'ChangeDectorRef', component: ChangeDectorRefComponent }
  , { path: 'ChangeDetectionStrategy', component: ChangeDetectionStrategyComponent }
  , { path: 'AsyncPipe', component: AsyncPipeComponent }
  , { path: 'Rxjs', component: RxjsCollectionComponent }
  , { path: 'Animation', component: AnimationComponent }
  , { path: 'compose', component: AnimationComponent, outlet: 'popup' }
  , { path: 'PlugIn', loadChildren: () => import('./PlugIn/plugin.module').then(m => m.PluginModule) }
  , { path: 'LittleMouseSearch', component: LittleMouseSearchComponent }
  , { path: 'UrlMetadataParser', component: UrlMetadataParserComponent }
  , { path: 'AcceptOtherPost', component: AcceptOtherPostComponent }
  //, { path: 'FireBaseTest', component: FirebaseTestComponent }
  , { path: 'WebWorker', loadChildren: () => import('./WebWorker/web-worker.module').then(m => m.WebWorkerModule) }
  , { path: 'Charts', loadChildren: () => import('./Charts/charts.module').then(m => m.ChartsModule) }
  , { path: 'SVG', loadChildren: () => import('./SVG/svg.module').then(m => m.SvgModule) }
  , { path: 'CodeGenerator', loadChildren: () => import('./CodeGenerator/code-generator.module').then(m => m.CodeGeneratorModule) }
  , { path: 'Pratice', loadChildren: () => import('./Pratice/pratice.module').then(m => m.PraticeModule) }
  , { path: 'PraticeJs', loadChildren: () => import('./PraticeJs/PraticeJs.module').then(m => m.PraticejsModule) }
  , { path: 'PraticeTs', loadChildren: () => import('./PraticeTs/PraticeTs.module').then(m => m.PraticetsModule) }
  // , { path: 'heroList', component: HeroListComponent }
  //, {
  //  path: 'dashboard/:id', component: DashboardComponent,
  //  children: [{
  //    path: 'subdashboard/:name', component: SubDashboardComponent
  //  }] //TODO: 父子層Route, path: dashboard/subdashboard (無效果)
  //}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], //將立好的Routes加入RouteModule
  exports: [RouterModule]
  //exports: [RouterModule]
})
export class AppRoutingModule { }
