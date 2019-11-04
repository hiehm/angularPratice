import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-slick-carseoul-plug-in',
  templateUrl: './ngx-slick-carseoul-plug-in.component.html',
  styleUrls: ['./ngx-slick-carseoul-plug-in.component.css']
})
export class NgxSlickCarseoulPlugInComponent implements OnInit {
  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "centerMode": true,
    "infinite": false,
    "centerPadding": '16px',
    "prevArrow": "<button class='slick-prev icons-ic-arrow-slide-previous slick-arrow' type='button'>Previous</button>",
    "nextArrow": "<button class='slick-next icons-ic-arrow-slide-next slick-arrow' type='button'>Next</button>",
    focusOnSelect: true
  };

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  constructor() { }

  ngOnInit() {

  }

}
