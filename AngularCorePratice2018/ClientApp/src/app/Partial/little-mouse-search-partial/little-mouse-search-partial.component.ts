import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

export interface settingModel {
  apiUrl: string
}


@Component({
  selector: 'app-little-mouse-search-partial',
  templateUrl: './little-mouse-search-partial.component.html',
  styleUrls: ['./little-mouse-search-partial.component.css']
})
export class LittleMouseSearchPartialComponent implements OnInit {
  @Input() setting: settingModel;
  @Output() returnContent = new EventEmitter();
  @ViewChildren('myli') _myliList: QueryList<ElementRef>;
  @ViewChild('searchContent', { static: true }) _searchContent: ElementRef;
  @ViewChild('searchData', { static: true }) _searchData: ElementRef;
  private _searchContentNavi: any;
  private _selection: Selection;
  private _rangeAt: Range;
  _searchUl: boolean;
  _imageMode: boolean;
  _data: string[];
  crossUrl: string;
  sourceUrl: string;
  metadataObj: any;
  constructor(
    private _httpClient: HttpClient,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    console.log(this.setting.apiUrl);
    this.metadataObj = {
      title: null,
      url: null,
      image: '',
      description: null
    }
    //支援跨域API
    this._imageMode = false;
    this.crossUrl = 'https://cors-anywhere.herokuapp.com/';
   // this.sourceUrl = 'https://azure.microsoft.com/zh-tw/free/search/?OCID=AID758581_OLA_22470693_244719285_114811204&dclid=CjkKEQjwtYXmBRCj8_OFwc3Fv5oBEiQA4UaYiJ9BRetP-b-ycqdjD9KRkB5Z8iOAUWoxmGZ52ZlWipLw_wcB';
    this._searchContentNavi = this._searchContent.nativeElement;
    this._searchUl = false;
    this._data = ['MATT CHEN', 'BONNIE WU', 'ILANDY CHIU', 'NINA CHIU', 'HAPPY CAT'];
  }

  //Mouse Click觸發
  littleMouseClick() {
    if (this.checkAltWord(true)) {
      //this._selection = window.getSelection();
      //this._rangeAt = this._selection.getRangeAt(0);
      this._searchUl = true;
     this.setDataBlockPosition();
      //this._searchData.nativeElement.focus();
    }
    else {
      this._searchUl = false;
    }
  }

  //Keyboard Event觸發
  littleMouseSearch(e: KeyboardEvent) {
    switch (e.which) {
      case 32:
      case 13:
    //    console.log(!this._imageMode);
        if (!this._imageMode) {
          let urlmaches = this.regexValidHttpUrl(this._searchContentNavi.innerText);
      //    console.log(urlmaches);
          if (!isNullOrUndefined(urlmaches)) {
            this.GetUrlMetaData(urlmaches[urlmaches.length - 1]);
          }
        }
        break;
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

  onPaste(e: ClipboardEvent) {
    let pasteText = e.clipboardData.getData('text');
    if (!isNullOrUndefined(pasteText) && pasteText != '') {
      if (this.regexValidHttpUrl(pasteText) != null) {
        this.GetUrlMetaData(pasteText);
      }
    }
    //^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$
    //console.log(e.clipboardData.getData('text'));
  }

  //將資料轉換成Element
  getSearchName(terms: string) {
    let _span = this.renderer.createElement('span');
    this.renderer.setAttribute(_span, 'contenteditable', 'false');
    this.renderer.addClass(_span, 'red');
    this.renderer.appendChild(_span, this.renderer.createText(terms));

    this.AddTagName(_span);
    this.focusEvent(true);
    this._searchUl = false;

   // this.GetUrlMetaData();
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

  //指標移動相關
  focusEvent(addMode: boolean = false, clickMode: boolean = false) {
    //try {
    let change = false;
    let range = document.createRange();
    let sel = window.getSelection();
    let selFirstAt = sel.getRangeAt(0);
    console.log(this._searchContent.nativeElement.lastChild);
    if (!isNullOrUndefined(this._searchContent.nativeElement.lastChild)) {
      //console.log(sel.getRangeAt(0));
      console.log(addMode);
      if (addMode) {
        change = true;
        range.setStart(selFirstAt.commonAncestorContainer.lastChild, 0);
      }
      else {
        if ((selFirstAt.startContainer.textContent === selFirstAt.endContainer.textContent) && (selFirstAt.startOffset === selFirstAt.endOffset)) {
          change = true;
          range.setStart(sel.getRangeAt(0).commonAncestorContainer, sel.getRangeAt(0).startOffset);    
        }    
      }
  
    }
    else {
      console.log(clickMode);
      if (clickMode) {
        change = true;       
        range.setStart(this._searchContentNavi, 0);
        console.log(this._searchContentNavi);
      }
    }

    if (change) {
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }

    //} catch{

    //} 
  }

  //取得Url MetaData
  GetUrlMetaData(sourceUrl: string) {
   // this.crossUrl = "http://www.corsproxy.com/";    
    this._httpClient.get(`${this.crossUrl}${sourceUrl}`, {
      headers: new HttpHeaders()
        .set('Content-Type', 'text/xml')
      , responseType: 'text'
    }).pipe(
      catchError((err) => {
        console.log(err);
        this._imageMode = false;
        return empty();
      })).subscribe(res => {
        console.log(res);
        let html = new DOMParser().parseFromString(res, 'text/html');
        //加入property與name attr判斷式
        console.log(html);
        let metas = html.head.getElementsByTagName('meta');
        let metaUrl = html.head.getElementsByTagName('meta').namedItem('og:url');
        let metaImage = html.head.getElementsByTagName('meta').namedItem('og:image');
        let metaDescription = html.head.getElementsByTagName('meta').namedItem('description');
        this.metadataObj.title = isNullOrUndefined(html.title) ? '' : html.title;
        this.metadataObj.url = isNullOrUndefined(metaUrl) ? '' : metaUrl.content;
        this.metadataObj.description = isNullOrUndefined(metaDescription) ? '' : metaDescription.content;
        if (isNullOrUndefined(metaImage)) {
          for (let i = 0; i < metas.length; i++) {
            if (metas[i].getAttribute('property') === 'og:image') {
              this.metadataObj.image = metas[i].content;
            
            }
          }
        }
        else {
          this.metadataObj.image = metaImage.content;
        }
        if (isNullOrUndefined(metaUrl)) {
          for (let i = 0; i < metas.length; i++) {
            if (metas[i].getAttribute('property') === 'og:url') {
              this.metadataObj.url = metas[i].content;
            }
          }
        }
        else {
          this.metadataObj.url = metaUrl.content;
        }
        this._imageMode = true;     
      });
  }

  //Partial To Main 接口
  returnPartialContent() {
    this.returnContent.emit(this._searchContentNavi.innerHTML)
  }

  //TODO: 移除MetaData Image
  removeImage() {
    console.log('click');
    this._imageMode = false;
  }

  //將Element插入至Div
  private AddTagName(element: Node) {
    if (this._selection.getRangeAt && this._selection.rangeCount) {
      this._rangeAt.deleteContents();
      this._rangeAt.insertNode(element);
      this._rangeAt.collapse(true);
      this._selection.removeAllRanges();
      this._selection.addRange(this._rangeAt);
      this.clearAltWord();
      this.returnContent.emit(this._searchContentNavi.innerHTML);
    }
  }

  //取代Keyword並加入空白格
  private clearAltWord() {
    this._rangeAt.commonAncestorContainer.textContent = this._rangeAt.commonAncestorContainer.textContent.substr(0, this._rangeAt.startOffset - 1);
    this._rangeAt.commonAncestorContainer.parentElement.innerHTML += '&nbsp;';
  }

  //設定資料顯示位置
  private setDataBlockPosition() {
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

  private regexValidHttpUrl(sourceUrl: string) {
    return sourceUrl.match(new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi));
  }

  
}
