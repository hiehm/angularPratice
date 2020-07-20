import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pratice-ng-content',
  templateUrl: './pratice-ng-content.component.html',
  styleUrls: ['./pratice-ng-content.component.css']
})
export class PraticeNgContentComponent implements OnInit, AfterViewInit {
  @ViewChild('parentP') _parentP: ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log('From parent template get <p>',this._parentP);
  }
}
