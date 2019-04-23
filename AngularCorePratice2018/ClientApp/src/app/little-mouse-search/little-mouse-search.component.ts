import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-little-mouse-search',
  templateUrl: './little-mouse-search.component.html',
  styleUrls: ['./little-mouse-search.component.css']
})
export class LittleMouseSearchComponent implements OnInit {
  @ViewChildren('myli') _myliList: QueryList<ElementRef>;
  @ViewChild('searchBox') _searchBox: ElementRef;
  @ViewChild('searchData') _searchData: ElementRef;
  private _searchBoxNavi: any;
  private _selection: Selection;
  private _rangeAt: Range;
  _searchUl: boolean;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this._searchBoxNavi = this._searchBox.nativeElement;
    this._searchUl = false;
  }

  littleMouseClick() {
    if (this.checkAltWord(true)) {
      this._selection = window.getSelection();
      this._rangeAt = this._selection.getRangeAt(0);
      this._searchUl = true;
      this.setDataBlockPosition();
      //this._searchData.nativeElement.focus();
    }
    else {
      this._searchUl = false;
    }
  }

  littleMouseSearch(e: KeyboardEvent) {
    switch (e.which) {
      default:
        if (this.checkAltWord()) {
          this._selection = window.getSelection();
          this._rangeAt = this._selection.getRangeAt(0);
          console.log(this._selection);
          this._searchUl = true;
          this.setDataBlockPosition();
          //this._searchData.nativeElement.focus();
        }
        else {
          this._searchUl = false;
        }
        break;
    }
  }

  getSearchName(terms: string) {
    let _span = this.renderer.createElement('span');
    this.renderer.setAttribute(_span, 'contenteditable', 'false');
    this.renderer.addClass(_span, 'red');
    this.renderer.appendChild(_span, this.renderer.createText(terms));

    this.AddTagName(_span);
    this.focusEvent(true);
    this._searchUl = false;
  }

  AddTagName(element: Node) {
    if (this._selection.getRangeAt && this._selection.rangeCount) {
      this._rangeAt.deleteContents();
      this._rangeAt.insertNode(element);
      this._rangeAt.collapse(true);
      this._selection.removeAllRanges();
      this._selection.addRange(this._rangeAt);
      this.clearAltWord();
    }
  }

  //當focus設定於 ul li時才會有動作
  optionArrowMove(e: any) {
    //取得當前li
    let curLi = this._myliList.find(x => x.nativeElement.className == 'active');
    switch (e.which) {
      case 13:
        if (!isNullOrUndefined(curLi!)) {
          this.clearAltWord();
          this.getSearchName(curLi!.nativeElement!.innerText!);
        }
        //無此設定則觸發littleMouseSearch方法後則多一行
        e.returnValue = false;
        break;
      case 38:
        console.log('up');
        this.renderer.addClass(curLi!.nativeElement!.previousElementSibling!, 'active');
        this.renderer.removeClass(curLi!.nativeElement!, 'active');
        break;
      case 40:
        console.log(this._myliList.last);
        this.renderer.addClass(this.renderer.nextSibling(curLi!.nativeElement!), 'active');
        this.renderer.removeClass(curLi!.nativeElement!, 'active');
        break;
    }
  }

  private checkAltWord(mouseMode: boolean = false): boolean {
    let result = false;
    let sel = window.getSelection();
    let range = sel.getRangeAt(0);
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

  //指標移動相關
  focusEvent(addMode: boolean = false) {
    let range = document.createRange();
    let sel = window.getSelection();
    if (!isNullOrUndefined(this._searchBox.nativeElement.lastChild)) {
      if (addMode) {
        range.setStart(this._searchBox.nativeElement.lastChild, 0);
      }
      else {
        range.setStart(sel.getRangeAt(0).commonAncestorContainer, sel.getRangeAt(0).startOffset);
      }
    }
    else {
      range.setStart(this._searchBoxNavi, 0);
    }
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  clearAltWord() {
    this._rangeAt.commonAncestorContainer.textContent = this._rangeAt.commonAncestorContainer.textContent.substr(0, this._rangeAt.startOffset - 1);
  }

  //移除Enter產生<div>元素轉換成<br>
  removeDivToBr() {
    console.log(this._searchBoxNavi.lastChild)
    this.renderer.removeChild(this._searchBoxNavi, this._searchBoxNavi.lastChild);
    this.renderer.appendChild(this._searchBoxNavi, this.renderer.createElement('br'));
  }

  //setDataBlockPosition() {
  //  this.test();
  //  //let _left = this._selection.baseOffset * 10;
  //  //if (_left < 20) {
  //  //  _left = 50;
  //  //}
  //  //this.renderer.setStyle(this._searchData.nativeElement, 'left', _left +'px');
  //}

  setDataBlockPosition() {
   let win =  window;
    var doc = win.document;
    var sel = doc.getSelection(), range, rects, rect;
    var x = 0, y = 0;
    if (sel) {
      sel = win.getSelection();
      if (sel.rangeCount) {
        range = sel.getRangeAt(0).cloneRange();
        if (range.getClientRects) {
          range.collapse(true);
          rects = range.getClientRects();
          if (rects.length > 0) {
            rect = rects[0];
          }
          x = rect.left;
          y = rect.top;
        }
        // Fall back to inserting a temporary element
        if (x == 0 && y == 0) {
          var span = doc.createElement("span");
          if (span.getClientRects) {
            // Ensure span has dimensions and position by
            // adding a zero-width space character
            span.appendChild(doc.createTextNode("\u200b"));
            range.insertNode(span);
            rect = span.getClientRects()[0];
            x = rect.left;
            y = rect.top;
            var spanParent = span.parentNode;
            spanParent.removeChild(span);

            // Glue any broken text nodes back together
            spanParent.normalize();
          }
        }
      }
    }
    console.log(x + ',' + y);
    this.renderer.setStyle(this._searchData.nativeElement, 'top', (y-240)+30+ 'px');
    this.renderer.setStyle(this._searchData.nativeElement, 'left', x + 'px');
  }
}
