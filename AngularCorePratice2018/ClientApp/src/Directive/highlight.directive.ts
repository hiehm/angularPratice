//針對DOM Element加入ElementRef
//針對User Event加入HostListener
//針對User Input加入Input
import { Directive, ElementRef, HostListener, Input } from '@angular/core'; 

@Directive({
  selector: '[appHighlight]'
})
//屬性型 Attribute Directive
export class HighlightDirective {
  @Input() highlightColor: string;
  constructor(private el: ElementRef) {
  }
  //宣告User Event mouseenter
  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.highlightColor);
  }
  //宣告User Event mouseleave
  @HostListener('mouseleave') onmouseleave() {
    this.highlight('');
  }
  //變更DOM背景顏色
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
