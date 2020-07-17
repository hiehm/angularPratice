import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeGeneratorComponent } from './code-generator/code-generator.component';
import { CodeGeneratorRoutes } from './code-generator.routing';
import { RouterModule } from '@angular/router';
import { CodeGenNormalComponent } from './code-gen-normal/code-gen-normal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObserversModule } from '@angular/cdk/observers'


@NgModule({
  declarations: [
    CodeGeneratorComponent,
    CodeGenNormalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ObserversModule,
    RouterModule.forChild(CodeGeneratorRoutes)
  ]
})
export class CodeGeneratorModule { }
