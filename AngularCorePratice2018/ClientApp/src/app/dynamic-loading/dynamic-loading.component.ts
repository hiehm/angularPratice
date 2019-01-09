import { Component, OnInit } from '@angular/core';
import { HerosComponent } from '../heros/heros.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HttpclientTestComponent } from '../httpclient-test/httpclient-test.component';
@Component({
  selector: 'app-dynamic-loading',
  templateUrl: './dynamic-loading.component.html',
  styleUrls: ['./dynamic-loading.component.css']
})
export class DynamicLoadingComponent implements OnInit {
  chooseForm: string;
  mapping = new Map<string, any>(
    [
      ['A', HerosComponent],
      ['B', DashboardComponent],
      ['C', HttpclientTestComponent],
    ]
  );
  constructor() { }

  ngOnInit() {
    this.chooseForm = 'A';
  }
  ChangeComponent(choose: string): void {
    this.chooseForm = choose;
  }
}
