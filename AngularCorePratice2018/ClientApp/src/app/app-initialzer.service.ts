import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppINITIALZERService {
  config: any;
  constructor(private httpClient: HttpClient) {
  }
    //APP_INITIALZER回傳類型只接收Promise()方式
  //initData() {
  //  return this.httpClient
  //    .get('https://jsonplaceholder.typicode.com/todos/')
  //    .pipe(tap(config => (this.config = config)))
  //    .toPromise();
  //}
}
