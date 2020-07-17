import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeGeneratorComponent } from './code-generator/code-generator.component';
import { CodeGeneratorRoutes } from './code-generator.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CodeGeneratorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CodeGeneratorRoutes)
  ]
})
export class CodeGeneratorModule { }
