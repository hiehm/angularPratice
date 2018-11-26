import { Component,  EventEmitter, Input, Output } from '@angular/core';
//加入EventEmitter輸出事件類別 , Input輸入類別 , Output輸出類別

@Component({
  selector: 'app-vote',
  template: `
             <h4>{{name}}</h4>
             <button (click)="vote(true)" [disabled] = "voted">Agree</button> 
             <button (click)="vote(false)"[disabled] = "voted">Disagree</button>`,
  //呼叫vote方法並傳入(boolean)
})
export class VoteComponent{
  @Input() name: string;
  //宣告 @Output Emitter輸出物件onVoted (基本為父層中某一個方法)
  @Output() onVoted = new EventEmitter<boolean>(); 
  voted = false;

  constructor() { }

  vote(agreed: boolean) { 
    this.onVoted.emit(agreed); //註冊onVoted到emit中,並帶入agreed參數
    this.voted = true;
  }
}
