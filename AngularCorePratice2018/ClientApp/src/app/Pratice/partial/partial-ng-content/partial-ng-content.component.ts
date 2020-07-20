import { Component, OnInit, ContentChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-partial-ng-content',
  templateUrl: './partial-ng-content.component.html',
  styleUrls: ['./partial-ng-content.component.css']
})
export class PartialNgContentComponent implements OnInit, AfterViewInit {
  @ContentChild('parentP') _parentP: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log('From child template get <p>',this._parentP);
  }
}
