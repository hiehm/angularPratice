import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent, HttpErrorResponse} from '@angular/common/http'; //Http Request Before & Response After,Global Method 
import { Observable, of, throwError } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppHttpInterceporService implements HttpInterceptor  {  
  
  constructor(private inj: Injector) { }

  //實作HttpInterceptor方法
  //HttpRequest 代表請求資訊
  //HttpHandler 代表一個可用來處理請求的實體
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log(req);
    const newquest = req.clone({ setHeaders: { Authorization: 'Bearer 123456' } });
    if (req != null) {
      return next.handle(req).pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            console.log('HttpResponse')
          }
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          return next.handle(req);
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
