import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; //宣告Observable
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from '../ViewModel/Hero';
import { HEROES } from '../Utility/Mock-heros';//DataSource
import { MessageService } from '../Service/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //加入Http類別

//@Injectable作為依賴注入使用的Decorator
//使HeroService可成為被注入的元件

const HttpOptions = { //宣告HttpHeader
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ 
  providedIn: 'root'
})

export class HeroService {
  private HeroApiUrl = "api/xxxx";
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
  constructor(private messageService: MessageService, private http: HttpClient //注入MessageService服務, 注入HttpClient服務
  ) {  

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
