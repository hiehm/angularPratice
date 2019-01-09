import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appExportDirective]',
  //exportAs 代表Directive外部實體名稱
  exportAs:'ExportDirective'
})
export class ExportDirectiveDirective {
  @Input() Mycolor;
  @HostBinding('style.color') get color() {
    console.log(this.Mycolor);
    return this.Mycolor || 'red';
  }
  constructor() { }
  changeColor(color: string) {
    this.Mycolor = color;
  }
}
