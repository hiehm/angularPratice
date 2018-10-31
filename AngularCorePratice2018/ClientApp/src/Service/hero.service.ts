import { Injectable } from '@angular/core';
import { Hero } from '../ViewModel/Hero';
import { HEROES } from '../Utility/Mock-heros';//DataSource
import { Observable, of } from 'rxjs'; //宣告Observable
import { MessageService } from '../Service/message.service';
//@Injectable作為依賴注入使用的Decorator
//使HeroService可成為被注入的元件
@Injectable({ 
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { //注入MessageService服務

  }
  getHeroes(): Hero[] { //Expression: FuncName():Return Type Or Void
    return HEROES;
  }
  getHeroesObservable(): Observable<Hero[]> {
    this.messageService.add('HeroService:fetched heroes');
    return of(HEROES);
  }
  addMessage(message: string): void {
    this.messageService.add(message);
  }
}
