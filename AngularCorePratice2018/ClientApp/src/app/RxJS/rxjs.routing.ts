import { Routes } from "@angular/router";
import { RxjsPraticeCounterComponent } from "./pratice/rxjs-pratice-counter/rxjs-pratice-counter.component";
import { RxjsCollectionComponent } from "./rxjs-collection/rxjs-collection.component";
import { RxjsCollection2Component } from "./rxjs-collection2/rxjs-collection2.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

export const RxJSRouters: Routes = [
  {
    path: '', //path:/home/RxJS
    component: RxjsComponent,
    children: [
      { path: '', component: RxjsComponent },
      { path: 'collection', component: RxjsCollectionComponent },
      { path: 'collection2', component: RxjsCollection2Component },
      { path: 'praticeCounter', component: RxjsPraticeCounterComponent }
    ]
  }
];
