import { Component, OnInit } from '@angular/core';
import { Hero } from '../../ViewModel/Hero';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  hero = "MATT";
  heroClass: Hero = {
    id: 1,
    name:'matt_hero'
  };
  constructor() { }

  ngOnInit() {
  }

}
