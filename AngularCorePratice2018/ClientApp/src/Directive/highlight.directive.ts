//針對DOM Element加入ElementRef
//針對User Event加入HostListener
//針對User Input加入Input
import { Directive, ElementRef, HostListener, Input } from '@angular/core'; 

@Directive({
  selector: '[appHighlight]'
})
//屬性型 Attribute Directive
export class HighlightDirective {
  @Input() highlightColor: string; //(未成功實作傳遞)
  constructor(private el: ElementRef) {
   // el.nativeElement.style.backgroundColor = 'blue'; //修改Element 背景顏色
  }
  //宣告User Event mouseenter
  @HostListener('mouseenter') onmouseenter() {
    this.highlight('blue');
  }
  //宣告User Event mouseleave
  @HostListener('mouseleave') onmouseleave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
