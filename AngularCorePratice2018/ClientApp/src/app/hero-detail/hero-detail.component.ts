import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Hero } from '../../ViewModel/Hero'


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  @Input() hero: Hero;

  private _name = '';
  @Input()
  set name(name: string) { //設定getter & setter
    this._name = (name && name.trim()) || '<No name set>'; //判斷是否值
  }
  get name(): string {
    return this._name;
  }

  constructor() { }
  ngOnInit() {
  }  
}
