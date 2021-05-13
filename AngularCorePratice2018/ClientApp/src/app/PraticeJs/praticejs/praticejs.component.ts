import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-praticejs',
  templateUrl: './praticejs.component.html',
  styleUrls: ['./praticejs.component.css']
})
export class PraticejsComponent implements OnInit {
  result: boolean; //全域變數

  //建構式
  constructor() { }

  ngOnInit(): void {
  //  this.func1(); 全域 跟 區域
    this.func2();
  }

  func1() {
    //字元 ? 'a'  type:string
    //字串 ? 'aa' type:string
    //整數 ? 100 型別(type):number
    //小數 ? 100.0 type:number
    //布林值 ? True / False  type:boolean
    //任意型別 ? 100 , 'matt' , true/false type:any
    var i = 100; //宣告 i 變數 , 賦予 100 的整數值
    var j = '100'; //宣告 j 變數 ,賦予 100 的字串'
    var c = '1';
    var d = 100.0;
    var b = true;
    //流程控制 if判斷式
    //100有沒有大於200? False
    
    if (i > 200) {
      //如果有就怎樣
      this.result = true;
      console.log('有大於200')
    } else {
      //阿沒有的話就怎樣
      this.result = false;
      console.log('沒有大於200')
    }
    //100有沒有大於99?  True
    console.log(i) //打印
  }

  func2(_d: number=100,_c:number=10) {
    //這些資料,如何知道有幾頁,假如一頁是十筆?
    let data = _d; //資料
    let count = _c; //筆數
    let page = data / count //頁數
    console.log(`總頁數: ${page}`);

    //運算式: + - * / %(餘數)
    //5 x 3 x (-1)=-15
    let nb: number = 5;
    let na: number = 3;
    let no: number = -1;
    let ns: string = '7'; //5-(-1)=6 , 5+(-1)=4 ,  5/3=1......!@#!
    console.log(`加號:${nb + nb},${nb + 5},${nb + ns},${ns + 5}`);
    console.log(`減號:${nb - 3},${nb - na},nb-no=${nb - no},nb+no=${nb + no}`)
    console.log(`乘號:${nb * na},${nb * na * no}`)
    console.log(`除號:${nb / na}`)
    console.log(`餘數:${nb % 5}`)

    if (nb % 3 === 0) {
      console.log('沒有餘數')
    } else {
      console.log('有餘數')
    }
  }
}
