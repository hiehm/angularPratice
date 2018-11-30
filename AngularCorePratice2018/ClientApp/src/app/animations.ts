//自訂animations翻頁效果
import {
  trigger, animateChild, group,
  transition, animate, style, query } from '@angular/animations';


export const slideInDownAnimation =
  trigger('routeAnimation', [ //trigger
    transition('heroes <=> hero', [ //transition
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [ //query
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([ //group
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
