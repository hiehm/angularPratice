import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CommonModule } from '@angular/common'; //加入CommonModule
import { HerosComponent } from '../app/heros/heros.component'; //加入HerosComponent
import { HeroDetailComponent } from '../app/hero-detail/hero-detail.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component'; //加入DashBoardComponent
import { VoteTakerComponent } from '../app/vote-taker/vote-taker.component';
const routes: Routes = [ //建構Routes規則
  { path: 'heros', component: HerosComponent } //設定Route路徑與顯示的Component
  , { path: 'dashboard', component: DashboardComponent }
  , { path: 'VoteTaker', component: VoteTakerComponent }
  , { path: 'detail/:id', component: HeroDetailComponent }
  , { path: '', redirectTo: '/dashboard', pathMatch: 'full' } //頁面載入時,預設跳轉的Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //將立好的Routes加入RouteModule
  exports: [RouterModule]
  //exports: [RouterModule]
})
export class AppRoutingModule { }
