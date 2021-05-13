import { Component, OnInit } from '@angular/core';

export type Arr = readonly unknown[];
function partialCall<T extends Arr, U extends Arr, R>(f: (...args: [...T, ...U]) => R, ...headArgs: T) {

  console.log(...headArgs);
  return (...tailArgs: U) => f(...headArgs, ...tailArgs)
}
@Component({
  selector: 'app-pratice-ts-v4',
  templateUrl: './pratice-ts-v4.component.html',
  styleUrls: ['./pratice-ts-v4.component.css']
})


export class PraticeTsV4Component implements OnInit {
  constructor() { }

  ngOnInit(): void {
    let _arr: Arr = [1, 2, 3, 4];
    let _ar2: Arr = ['MATT', 'MARY'];
    console.log(this.concat(_arr, _ar2));
    this.foo(['MATT', 200]);
    this.feature3();
    this.feature4();
  }


  /** 泛型函數 - 不定複數型別陣列傳入回傳
    * 此種extends寫法好處,可以統一管理傳入parameter的interface型別**
    */
  private concat<T extends Arr, U extends Arr>(arr1: T, arr2: U): [...T, ...U] {
    return [...arr1, ...arr2];
  }

  /** 標記數列元素 - 可針對any[]建構成 [arg0:string,arg1:number:arg2:boolean]
   *  解構 let[a,b]=x 可不用直接對應原本參數名稱,而可直接使用位置對應
   *  在閱讀上更顯而易懂
   */
  private foo(x: [first: string, second: number]) {
    let [a, b] = x;
    console.log(a);
    console.log(b);
  }

  /**短路賦值運算符  - 空值合併運算符 ?? 進化成 ??=
   * 可允許在判斷式後直接 push 新值
   */
  private feature3() {
    let values: string[];
    // Before 
    //(values ?? (values = [])).push("hello");
    // After 
    (values ??= []).push("hello"); //判定為undefined,並返回[]後再push一個值
    console.log(values);
  }

  private feature4() {
    let _arr: Arr = [1, 2, 3, 4];
    let _ar2: Arr = ['MATT', 'MARY'];
    const foo = (x: string, y: number, z: boolean) => { }

    // This doesn't work because we're feeding in the wrong type for 'x'.
   // const f1 = partialCall(foo, 100);
    //                          ~~~
    // error! Argument of type 'number' is not assignable to parameter of type 'string'.


    // This doesn't work because we're passing in too many arguments.
   // const f2 = partialCall(foo, "hello", 100, true, "oops")
    //                                              ~~~~~~
    // error! Expected 4 arguments, but got 5.


    // This works! It has the type '(y: number, z: boolean) => void'
    const f3 = partialCall(foo,'MATT',500);

    // What can we do with f3 now?

   f3(false); // works!

  //  f3();
    // error! Expected 2 arguments, but got 0.

 //   f3(123, "hello");
  }

  /** catch子句支援unknow型別
    * 在不定條件情況下 使用 unknown 比使用 any更安全
    */
  private catchUnknow() {
    try {

    } catch (e: unknown) {
      //e.toLowerCase() 在any型別情況下此句不會進行錯誤判定,但unknown型別會提醒應該做型別判定
      if (typeof e === "string") {
        e.toLowerCase();
      }
    }
  }
}
