import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-mouse-search-by-cdk-overlay',
  templateUrl: './little-mouse-search-by-cdk-overlay.component.html',
  styleUrls: ['./little-mouse-search-by-cdk-overlay.component.css']
})
export class LittleMouseSearchByCdkOverlayComponent implements OnInit {
  _data: string[];
  _searchUl: boolean;
  constructor() { }

  ngOnInit(): void {
    this._data = ['MATT CHEN', 'BONNIE WU', 'ILANDY CHIU', 'NINA CHIU', 'HAPPY CAT'];
  }
  //Keyboard Event觸發
  littleMouseSearch(e: KeyboardEvent) {
    switch (e.which) {
      case 32:
      case 13:
        ////    console.log(!this._imageMode);
        //if (!this._imageMode) {
        //  let urlmaches = this.regexValidHttpUrl(this._searchContentNavi.innerText);
        //  //    console.log(urlmaches);
        //  if (!isNullOrUndefined(urlmaches)) {
        //    this.GetUrlMetaData(urlmaches[urlmaches.length - 1]);
        //  }
        //}
        break;
      default:
        //if (this.checkAltWord()) {
        //  this._selection = window.getSelection();
        //  this._rangeAt = this._selection.getRangeAt(0);
        //  console.log(this._rangeAt);
        //  this._searchUl = true;
        //  this.setDataBlockPosition();
        //  //this._searchData.nativeElement.focus();
        //}
        //else {
        //  this._searchUl = false;
        //}
        break;
    }
  }
}
