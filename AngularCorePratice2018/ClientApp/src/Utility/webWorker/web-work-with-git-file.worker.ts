/// <reference lib="webworker" />
import { takeUntil, concatMap } from 'rxjs/operators';
import { timer, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const destory$ = new Subject();
const queryGithub = () =>
  ajax.getJSON('https://api.github.com/users?per_page=5');

const longPolling = () =>
  timer(1000, 1000).pipe(
    concatMap(() => queryGithub()),
    takeUntil(destory$)
  );

addEventListener('message', ({ data }) => {
  switch (data) {
    case 'start':
      longPolling().subscribe(value => postMessage(value));
      break;
    case 'stop':
      destory$.next();
      break;
  }
});
