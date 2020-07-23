import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratice-ng-select-option',
  templateUrl: './pratice-ng-select-option.component.html',
  styleUrls: ['./pratice-ng-select-option.component.css']
})
export class PraticeNgSelectOptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(d: any, sort: number) {
    console.log(d,sort+=1);
  }
}
