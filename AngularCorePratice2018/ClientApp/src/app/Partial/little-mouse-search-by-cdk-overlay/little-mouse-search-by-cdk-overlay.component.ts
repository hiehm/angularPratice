import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayRef, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-little-mouse-search-by-cdk-overlay',
  templateUrl: './little-mouse-search-by-cdk-overlay.component.html',
  styleUrls: ['./little-mouse-search-by-cdk-overlay.component.css']
})
export class LittleMouseSearchByCdkOverlayComponent implements OnInit {
  @ViewChild('searchContent') _searchContent: ElementRef;
  @ViewChild('searchData') _searchData: TemplateRef<any>;
  _searchUl: boolean = false;
  _data: string[];
  overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this._data = ['MATT CHEN', 'BONNIE WU', 'ILANDY CHIU', 'NINA CHIU', 'HAPPY CAT'];
    this.setOverlay();
  }

  private setOverlay() {
    //const strategy = this.overlay.position().connectedTo(
    //  this._searchContent, {
    //  originX: 'end',
    //  originY: 'top',
    //}, {
    //  overlayX: 'end',
    //  overlayY: 'bottom'
    //});
    //this.overlayRef = this.overlay.create({
    //  height: '400px',
    //  width:'400px',
    //  positionStrategy: strategy
    //});
  
    const strategy = this.overlay.position().global().centerHorizontally().centerVertically();
    const config = new OverlayConfig({
      hasBackdrop: true,
      positionStrategy: strategy
    });
    this.overlayRef = this.overlay.create(config);
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
    });
  }

  //Keyboard Event觸發
  littleMouseSearch(e: KeyboardEvent) {
    console.log(e);
    switch (e.which) {
      default:
     //   if (this.checkAltWord()) {
          this.displayMenu();
          //this._selection = window.getSelection();
          //this._rangeAt = this._selection.getRangeAt(0);
          //console.log(this._rangeAt);
          //this._searchUl = true;
      //  }
        //  this.setDataBlockPosition();
        //  //this._searchData.nativeElement.focus();
        //}
     //   else {
        //  this._searchUl = false;
     //   }
        break;
    }
  }

  //將資料轉換成Element
  getSearchName(terms: string) {
    //let _span = this.renderer.createElement('span');
    //this.renderer.setAttribute(_span, 'contenteditable', 'false');
    //this.renderer.addClass(_span, 'red');
    //this.renderer.appendChild(_span, this.renderer.createText(terms));

    //this.AddTagName(_span);
    //this.focusEvent(true);
    //this._searchUl = false;

    // this.GetUrlMetaData();
  }

  displayMenu() {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    } else {
      this.overlayRef.attach(new TemplatePortal(this._searchData, this.viewContainerRef));
    }
  }

  //檢查關鍵字
  private checkAltWord(mouseMode: boolean = false): boolean {
    let result = false;
    let range = window.getSelection().getRangeAt(0);
    let textContent = range.startContainer.textContent;
    let prevWord = textContent.substr(range.startOffset - 1, 1);
    if (mouseMode) {
      if (prevWord === '@' || prevWord === '＠') {
        if (range.startOffset === 1 && textContent.substr(range.startOffset, 1) === '') {
          result = true;
        }
        else if (textContent.substr(range.startOffset - 2, 1).trim() === '' && textContent.substr(range.startOffset, 1).trim() === '') {
          result = true;
        }
      }
    }
    else {
      if (prevWord === '@' || prevWord === '＠') {
        result = true;
      }
    }
    return result;
  }
}
