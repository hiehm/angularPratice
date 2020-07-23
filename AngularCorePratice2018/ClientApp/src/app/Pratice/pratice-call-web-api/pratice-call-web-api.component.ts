import { Component, OnInit } from '@angular/core';
import { PraticeService } from '../pratice.service';

@Component({
  selector: 'app-pratice-call-web-api',
  templateUrl: './pratice-call-web-api.component.html',
  styleUrls: ['./pratice-call-web-api.component.css']
})
export class PraticeCallWebAPIComponent implements OnInit {

  constructor(
    private _praticeService: PraticeService
  ) { }

  ngOnInit(): void {
  }

  callWebApi() {
    this._praticeService.callCorsApi().subscribe(res => {
      console.log(res);
    });
  }
}
