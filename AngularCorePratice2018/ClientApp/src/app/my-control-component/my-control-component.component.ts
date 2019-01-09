import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, OnInit, forwardRef } from '@angular/core';

//以下屬性設定完成,此元件會被視為一個表單控制項
export const MY_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR, //設定為可被注入token
  //設定為使用現有的Component
  //forwarRef 在Component產生實體之後執行
  //multi:true 代表NG_VALUE_ACCESSOR可被注入多種不同實體,代表所有設定NG_VALUE_ACCESSOR的實體都可以被正確獲取
  useExisting: forwardRef(() => MyControlComponentComponent),
  multi: true
};

@Component({
  selector: 'app-my-control-component',
  templateUrl: './my-control-component.component.html',
  styleUrls: ['./my-control-component.component.css'],
  providers: [MY_CONTROL_VALUE_ACCESSOR] //注入Token
})

//引用介面ControlValueAccessor並實作相關方法
export class MyControlComponentComponent implements OnInit, ControlValueAccessor {
  info = {};

  // 用來接收 setDisabledState 的狀態
  disabled = false;

  // 用來接收 registerOnChange 和 onTouched 傳入的方法
  onChange: (value) => {};
  onTouched: () => {};

  // 元件內必須找一個時機觸發 change 方法
  userInfoChange() {
    this.onChange(this.info);
  }

  //當元件從外部被變更時所呼叫
  writeValue(obj: any): void {
    this.info = obj;
  }
  //將一個方法傳入,在元件內呼叫此方法時,即代表表單控制項的值有變更
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  //同上,但只在touched狀態時呼叫
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  //當disabled狀態變更時,會呼叫此方法
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  constructor() { }

  ngOnInit() {
  }
}
