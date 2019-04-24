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
          console.log(this._rangeAt);
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

  //指標移動相關
  focusEvent(addMode: boolean = false) {
    //try {
      let range = document.createRange();
      let sel = window.getSelection();
      if (!isNullOrUndefined(this._searchBox.nativeElement.lastChild)) {
        if (addMode) {
          range.setStart(sel.getRangeAt(0).commonAncestorContainer.lastChild, 0);
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
    //} catch{

    //} 
  }

  clearAltWord() {
    this._rangeAt.commonAncestorContainer.textContent = this._rangeAt.commonAncestorContainer.textContent.substr(0, this._rangeAt.startOffset - 1);
    this._rangeAt.commonAncestorContainer.parentElement.innerHTML += '&nbsp;';
  }

  ////移除Enter產生<div>元素轉換成<br>
  //removeDivToBr() {
  //  this.renderer.removeChild(this._searchBoxNavi, this._searchBoxNavi.lastChild);
  //  this.renderer.appendChild(this._searchBoxNavi, this.renderer.createElement('br'));
  //}

  //設定資料顯示位置
  setDataBlockPosition() {
    let contentDefy = 240;
    let sel = window.document.getSelection(), range, rects, rect;
    let x = 0, y = 0;
    if (sel) {
      sel = window.getSelection();
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
      }
    }
    this.renderer.setStyle(this._searchData.nativeElement, 'top', (y - contentDefy) + 30 + 'px');
    this.renderer.setStyle(this._searchData.nativeElement, 'left', x + 'px');
  }
}
