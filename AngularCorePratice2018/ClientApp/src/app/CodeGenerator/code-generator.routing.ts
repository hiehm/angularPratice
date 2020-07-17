import { Routes } from '@angular/router';
import { CodeGeneratorComponent } from './code-generator/code-generator.component';
import { CodeGenNormalComponent } from './code-gen-normal/code-gen-normal.component';



export const CodeGeneratorRoutes: Routes = [
  {
    path: '', //path:/home/CodeGenerator
    component: CodeGeneratorComponent,
    children: [
      { path: '', component: CodeGeneratorComponent },
      { path: 'Normal', component: CodeGenNormalComponent }
    ]
  }
];
