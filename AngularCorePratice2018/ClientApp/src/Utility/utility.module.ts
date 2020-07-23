import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceAngularWordLetterPipe } from './pipe/replace-angular-word-letter.pipe';
import { CodeGenTemplateDirective } from './directive/code-gen-template.directive';
import { DynamicSelectOptionDirective } from './directive/dynamic-select-option.directive';



@NgModule({
  declarations: [
    ReplaceAngularWordLetterPipe,
    CodeGenTemplateDirective,
    DynamicSelectOptionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReplaceAngularWordLetterPipe,
    CodeGenTemplateDirective,
    DynamicSelectOptionDirective
  ],
  providers: [
    ReplaceAngularWordLetterPipe, DynamicSelectOptionDirective
  ]
})
export class UtilityModule { }
