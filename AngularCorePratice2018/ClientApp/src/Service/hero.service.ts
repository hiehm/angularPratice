import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; //宣告Observable
import { catchError, map, tap, retry } from 'rxjs/operators';
import { Hero } from '../ViewModel/Hero';
import { HEROES } from '../Utility/Mock-heros';//DataSource
import { MessageService } from '../Service/message.service';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, HttpParams } from '@angular/common/http'; //加入Http類別
//@Injectable作為依賴注入使用的Decorator
//使HeroService可成為被注入的元件

const HttpOptions = { //宣告HttpHeader
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface User { //User Interface
  login: string
}
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private readonly API_URL = 'https://api.github.com';
  private readonly HeroApiUrl = "api/xxxx";
  private handleError<T>(operation = 'operation', result?: T) { //HandleError發生例外呼叫的處理函式
    return (error: any): Observable<T> => {
      this.log('Error');
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  //注入MessageService服務, 注入HttpClient服務
  constructor(private messageService: MessageService, private http: HttpClient) {  
 
  }

  addUser() {
    this.http.post(`${this.API_URL}/users`, { name: 'MATT', age: 18 }, {
      params: new HttpParams().set('id', '3') //加入Params進行URL參數設定
    });
  }

  getUsers(): Observable<HttpResponse<User[]>> { //資料型態變更為 HttpResponse
    return this.http.get<User[]>(`${this.API_URL}/users`, { observe: 'response' })
      .pipe( //透過pipe方式加入前置動作
        retry(3), //當連線失敗時,重新嘗試次數
        catchError(this.handleError<any>('error')) //抓取錯誤
      );
  }

  useHttpGetData(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.HeroApiUrl).pipe(
      catchError(this.handleError<any>('Error')));
  }
  useHttpAddData(hero: Hero): Observable<any> {
    return this.http.post(this.HeroApiUrl, hero, HttpOptions).pipe(
      catchError(this.handleError('addHero'))
    );
  }
  getHeroes(): Hero[] { //Expression: FuncName():Return Type Or Void
    return HEROES;
  }
  getHeroesObservable(): Observable<Hero[]> { //宣告此方法為Obervable模式
    this.messageService.add('HeroService:fetched heroes');
    return of(HEROES); //回傳方法固定為of
  }
  addMessage(message: string): void {
    this.messageService.add(message);
  }
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      this.log(`non-executing "${term}"`)
      return of(HEROES);
    }
    //資料搜尋,透過includes(string,position)方法進行文字篩選
    let filterHeroes = HEROES.filter(h => h.name.toLowerCase().includes(term.toLowerCase()));
    if (filterHeroes.length > 0) {
      this.log(`found heroes matching "${term}"`)
      return of(filterHeroes);
    }
    return of([]);
    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}
