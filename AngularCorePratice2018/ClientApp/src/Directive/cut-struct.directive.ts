//自訂Directive 需加入TemplateRef
//自訂Directive 需加入ViewContainerRef
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCutStruct]'
})

 //結構型 Structive Directive
export class CutStructDirective {
  private hasView = false;
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
  }
  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  } 
}
