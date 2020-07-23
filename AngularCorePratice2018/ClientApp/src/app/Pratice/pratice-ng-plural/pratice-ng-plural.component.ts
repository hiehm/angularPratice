import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratice-ng-plural',
  templateUrl: './pratice-ng-plural.component.html',
  styleUrls: ['./pratice-ng-plural.component.css']
})
export class PraticeNgPluralComponent implements OnInit {
  count: number = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
