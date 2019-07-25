import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-url-metadata-parser',
  templateUrl: './url-metadata-parser.component.html',
  styleUrls: ['./url-metadata-parser.component.css']
})
export class UrlMetadataParserComponent implements OnInit {
  crossUrl: string;
  sourceUrl: string;
  metadataObj: any;
  constructor(
    private _httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.metadataObj = {
      title: null,
      url: null,
      image: '',
      description: null
    }
    //支援跨域API
    this.crossUrl = 'https://cors-anywhere.herokuapp.com/';
    this.sourceUrl = 'https://azure.microsoft.com/zh-tw/free/search/?OCID=AID758581_OLA_22470693_244719285_114811204&dclid=CjkKEQjwtYXmBRCj8_OFwc3Fv5oBEiQA4UaYiJ9BRetP-b-ycqdjD9KRkB5Z8iOAUWoxmGZ52ZlWipLw_wcB';
  }
  changeInput(e: any) {
    this._httpClient.get(`${this.crossUrl}${this.sourceUrl}`, {
      headers: new HttpHeaders()
        .set('Content-Type', 'text/xml')
      , responseType: 'text'
    }).subscribe(res => {
      let html = new DOMParser().parseFromString(res, 'text/html');
      this.metadataObj.title = html.title;
      this.metadataObj.url = html.head.getElementsByTagName('meta').namedItem('og:url').content;
      this.metadataObj.image = html.head.getElementsByTagName('meta').namedItem('og:image').content;
      this.metadataObj.description = html.head.getElementsByTagName('meta').namedItem('description').content;
    });
  }
}
