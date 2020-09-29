import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-praticejs-reflect',
  templateUrl: './praticejs-reflect.component.html',
  styleUrls: ['./praticejs-reflect.component.css']
})
export class PraticejsReflectComponent implements OnInit {
  objData: any;
  showCaseOne: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.objData = { b: 1000, c: 100, d: 'S', e: 350 };
    this.caseOne();
    this.caseTwo();
  }

  //取出不定型別中所有 key & value
  private caseOne() {
    const obj = { b: 1000, c: 100, d: 'S', e: 350 }; //{b , c , d , e}
    // console.log(Reflect.has(obj, 'd')); has => true/false

    const reflection = (a = 100, b = 200) => {
      return Reflect.ownKeys({ a, b, ...obj }); //{a , b , c , d , e}
    }

    reflection(500, 600).forEach(x => {
      this.showCaseOne.push(`Reflect property [${x.toString()}] with value ${obj[x]}`);
      console.log(`Reflect property [${x.toString()}] with value`, obj[x]);
    });
  }

  //移除指定屬性 deleteProperty
  private caseTwo() {
    const obj = { ...this.objData };
    console.log('has e:', Reflect.has(obj, 'e'));
    Reflect.deleteProperty(obj, 'e');
    console.log('before obj', { ...this.objData });
    console.log('after deleteProperty obj:', obj);
  }

}
