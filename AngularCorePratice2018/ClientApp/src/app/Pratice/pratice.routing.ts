import { Routes } from "@angular/router";
import { PraticeNgContentComponent } from "./pratice-ng-content/pratice-ng-content.component";
import { PraticeComponent } from "./pratice/pratice.component";

export const PraticeRouters: Routes = [
  {
    path: '', //path:/home/Pratice
    component: PraticeComponent,
    children: [
      { path: '', component: PraticeComponent },
      { path: 'ngContent', component: PraticeNgContentComponent }
    ]
  }
];
