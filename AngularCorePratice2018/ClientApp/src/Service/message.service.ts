import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = []; //this is a array,expression: variable:Type[]=DefaultValue

  add(message: string) { //接收add func傳遞的值
    this.messages.push(message);
  }
  clear() {//清空初始化
    this.messages = [];
  }
  constructor() { }
}
