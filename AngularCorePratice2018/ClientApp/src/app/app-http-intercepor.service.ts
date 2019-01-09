import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'; //Http Request Before & Response After,Global Method 
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppHttpInterceporService implements HttpInterceptor  {  
  
  constructor() { }

  //實作HttpInterceptor方法
  //HttpRequest 代表請求資訊
  //HttpHandler 代表一個可用來處理請求的實體
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    const newquest = req.clone({ setHeaders: { Authorization: 'Bearer 123456' } });
    return next!.handle(newquest).pipe(
      //加入全域錯誤處理
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        throwError(error);
        return of(null);
      })
    );
  }
}
