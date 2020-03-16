import { ErrorHandler, Injectable } from "@angular/core"; //引用錯誤處理常式

@Injectable()
export class ErrorLogHandler implements ErrorHandler {
  //實作Error Handler Method
  handleError(error: any): void {
    console.log('Error Handler:');
    console.log(error);
    //或是將 error 記錄到某個後端去
  }
}
