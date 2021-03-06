import { Routes } from "@angular/router";
import { PraticejsComponent } from "./praticejs/praticejs.component";
import { PraticejsReflectComponent } from "./praticejs-reflect/praticejs-reflect.component";
import { PraticejsMapAndSetComponent } from "./praticejs-map-and-set/praticejs-map-and-set.component";
import { PraticejsRegularExpressionComponent } from "./praticejs-regular-expression/praticejs-regular-expression.component";

export const PraticeJsRouters: Routes = [
  {
    path: '', //path:/home/PraticeJs
    component: PraticejsComponent,
    children: [
      { path: '', component: PraticejsComponent },
      { path: 'Reflect', component: PraticejsReflectComponent },
      { path: 'MapAndSet', component: PraticejsMapAndSetComponent },
      { path: 'RegularExpression', component: PraticejsRegularExpressionComponent }
    ]
  }
];
