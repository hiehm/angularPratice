import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceAngularWordLetterPipe } from './pipe/replace-angular-word-letter.pipe';
import { CodeGenTemplateDirective } from './directive/code-gen-template.directive';



@NgModule({
  declarations: [
    ReplaceAngularWordLetterPipe,
    CodeGenTemplateDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReplaceAngularWordLetterPipe,
    CodeGenTemplateDirective
  ],
  providers: [
    ReplaceAngularWordLetterPipe
  ]
})
export class UtilityModule { }
