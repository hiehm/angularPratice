import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-praticejs-map-and-set',
  templateUrl: './praticejs-map-and-set.component.html',
  styleUrls: ['./praticejs-map-and-set.component.css']
})
export class PraticejsMapAndSetComponent implements OnInit {
  arrCol: any[];
  mapObj: Map<string, any>; //映射物件 Map
  setObj: Set<string>;
  constructor() { }

  ngOnInit(): void {
    this.arrCol = [{
      name: 'SATT',
      age: 25
    }, {
      name: 'MARY',
      age: 18
    }, {
      name: 'YER',
      age: 99
    }];
    this.useMapIterator();
    this.useSetIterator();

  }

  // a=new obj,b=old obj
  compareFn(a, b) {
    console.log(a); 
    console.log(b);
    //a.value > b.value?1:-1; //遞增排序
    return a.value < b.value ? 1 : -1; //遞減排序
  }

  //Map Iterator
  private useMapIterator() {
    this.mapObj = new Map<string, any>(this.arrCol.map(x => [x.name, x.age]));
    for (let v of this.mapObj.entries()) {
      console.log(`key:${v[0]},value:${v[1]}`);
    }
    console.log('entries:', this.mapObj.entries());
    console.log('keys:', this.mapObj.keys());
    console.log('values:', this.mapObj.values());

  }

  //Set Iterator
  private useSetIterator() {
    this.setObj = new Set<string>();
    console.log('set add 1:',this.setObj.add('1'));
    this.setObj.add('5');
    console.log('Set has "5":', this.setObj.has('5'));
    console.log(this.setObj.delete('100'));
    console.log('Set size:', this.setObj.size);
    console.log('Set:', this.setObj);
  }
}
