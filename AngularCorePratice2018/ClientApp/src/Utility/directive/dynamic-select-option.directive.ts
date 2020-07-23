import { Directive, ElementRef, Renderer2, Optional, Host } from '@angular/core';
import { SelectControlValueAccessor, NgSelectOption } from '@angular/forms';

@Directive({
  selector: '[appDynamicSelectOption]'
})
export class DynamicSelectOptionDirective {
  data: any[];
  constructor(
    el: ElementRef<HTMLSelectElement>,
    renderer: Renderer2,
    @Optional() @Host() select: SelectControlValueAccessor
  ) {
    this.data = this.createTempData();
    this.data.forEach(item => {
      const option = this.createOptionTag(item);
      el.nativeElement.add(option);
      new NgSelectOption(new ElementRef(option), renderer, select);
    });
  }

  //TempData
  private createTempData() {
    return [{
      id: 1,
      name: 'A'
    }, {
      id: 2,
      name: 'B'
    }, {
      id: 3,
      name: 'C'
    }];
  }

  //create option tag
  private createOptionTag(item: any) {
    const opt = document.createElement('option');
    opt.text = item.name;
    opt.value = item.id;
    return opt;
  }
}
