import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  template: `<h2>Should mankind colonize the Universe?</h2>
             <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
             <app-vote *ngFor="let voter of voters"
              [name]="voter"
              (onVoted)="onVoted($event)">
             </app-vote>`
})
export class VoteTakerComponent{
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  constructor() { }
  //基本方法宣告,此範例由子層進行Emitter註冊使用,其agreed值由子層提供
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
