import { Routes } from '@angular/router';
import { CodeGeneratorComponent } from './code-generator/code-generator.component';



export const CodeGeneratorRoutes: Routes = [
  {
    path: '', //path:/home/CodeGenerator
    component: CodeGeneratorComponent,
    children: [
      { path: '', component: CodeGeneratorComponent }
    ]
  }
];
