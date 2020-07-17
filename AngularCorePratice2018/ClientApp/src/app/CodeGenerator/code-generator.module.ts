import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ObserversModule } from '@angular/cdk/observers'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { CommonModule } from '@angular/common';
import { UtilityModule } from '../../Utility/utility.module';
import { CodeGeneratorComponent } from './code-generator/code-generator.component';
import { CodeGenNormalComponent } from './code-gen-normal/code-gen-normal.component';
import { CodeGeneratorRoutes } from './code-generator.routing';

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
    ClipboardModule,
    UtilityModule,
    RouterModule.forChild(CodeGeneratorRoutes)
  ]
})
export class CodeGeneratorModule { }
