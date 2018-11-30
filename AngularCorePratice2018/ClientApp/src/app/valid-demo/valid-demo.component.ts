import { Component, OnInit } from '@angular/core';
import { Hero } from '../../ViewModel/Hero';
@Component({
  selector: 'app-valid-demo',
  templateUrl: './valid-demo.component.html',
  styleUrls: ['./valid-demo.component.css']
})
export class ValidDemoComponent implements OnInit {
  model= {
    name:'MATT'
  }
  FormMessage: string
  constructor() { }

  ngOnInit() {
  }
  onSubmit(message: string): void {
    console.log(message);
    this.FormMessage = message;
  }
}
