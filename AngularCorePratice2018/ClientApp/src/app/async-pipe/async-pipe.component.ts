import { Component, OnInit } from '@angular/core';
import { HeroService, User } from '../../Service/hero.service';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  data$: any;
  todos$: Observable<any[]>;
  constructor(private heroService: HeroService, private httpClient: HttpClient) {

  }

  ngOnInit() {
    //this.todos$ = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/todos/').pipe(
    //  shareReplay(1)
    //);
  }
  GetUsers() {
    //this.data$ = this.heroService.getUsersWithShareReplay();
    //this.todos$ = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/todos/').pipe(
    //  shareReplay(1)
    //);
  }
  search(terms: string) {
    this.todos$ = this.todos$.pipe(
      filter((obj) => obj.toString().toLocaleLowerCase().includes(terms.toLocaleLowerCase()))
    );

    //this.searchTerms.next(this.results$);

  }
}
