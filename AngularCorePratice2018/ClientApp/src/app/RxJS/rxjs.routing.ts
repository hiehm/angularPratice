import { Routes } from "@angular/router";
import { RxjsCollectionComponent } from "./rxjs-collection/rxjs-collection.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

export const RxJSRouters: Routes = [
  {
    path: '', //path:/home/RxJS
    component: RxjsComponent,
    children: [
      { path: '', component: RxjsComponent },
      { path: 'collection', component: RxjsCollectionComponent }
    ]
  }
];
