import { Routes } from "@angular/router";
import { PraticeNgContentComponent } from "./pratice-ng-content/pratice-ng-content.component";
import { PraticeComponent } from "./pratice/pratice.component";
import { PraticeCallWebAPIComponent } from "./pratice-call-web-api/pratice-call-web-api.component";
import { PraticeNgPluralComponent } from "./pratice-ng-plural/pratice-ng-plural.component";
import { PraticeNgSelectOptionComponent } from "./pratice-ng-select-option/pratice-ng-select-option.component";

export const PraticeRouters: Routes = [
  {
    path: '', //path:/home/Pratice
    component: PraticeComponent,
    children: [
      { path: '', component: PraticeComponent },
      { path: 'ngContent', component: PraticeNgContentComponent },
      { path: 'ngPlural', component: PraticeNgPluralComponent },
      { path: 'ngSelectOption', component: PraticeNgSelectOptionComponent },
      { path: 'callWebApi', component: PraticeCallWebAPIComponent }
    ]
  }
];
