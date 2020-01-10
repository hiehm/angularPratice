import { Directive, Renderer2, AfterContentInit, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[appDynamicFlowShowButton]'
})
export class DynamicFlowShowButtonDirective implements AfterViewInit {
    @Input() mode: string; //top、bottom、both
    constructor(private _el: ElementRef, private renderer: Renderer2) {
    }

    ngAfterViewInit() {      
        const _srcEl = (this._el.nativeElement as HTMLElement).children[0];
        let _srcEl2 = null;
        if (this.mode === 'both') {
            _srcEl2 = (this._el.nativeElement as HTMLElement).children[1];
        }
        this.renderer.listen(this._el.nativeElement, 'mouseenter', (e) => {
            this.removeClass(_srcEl);
            if (this.mode === 'both') {
                this.removeClass(_srcEl2)
            }
        });

        this.renderer.listen(this._el.nativeElement, 'mouseleave', (e) => {
            this.addClass(_srcEl);
            if (this.mode === 'both') {
                this.addClass(_srcEl2);
            }
        });
    }

    private addClass(srcEl: any) {
        this.renderer.addClass(srcEl, 'dis-none');
    }

    private removeClass(srcEl: any) {
        this.renderer.removeClass(srcEl, 'dis-none');
    }
}
