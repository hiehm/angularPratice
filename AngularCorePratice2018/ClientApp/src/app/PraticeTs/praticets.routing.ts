import { Routes } from "@angular/router";
import { PraticeTsV4Component } from "./pratice-ts-v4/pratice-ts-v4.component";
import { PraticetsComponent } from "./praticets/praticets.component";

export const PraticeTsRouters: Routes = [
  {
    path: '', //path:/home/PraticeTs
    component: PraticetsComponent,
    children: [
      { path: '', component: PraticetsComponent },
      { path: 'TsV4', component: PraticeTsV4Component }
    ]
  }
];
