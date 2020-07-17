import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCodeGenTemplate]'
})
export class CodeGenTemplateDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
