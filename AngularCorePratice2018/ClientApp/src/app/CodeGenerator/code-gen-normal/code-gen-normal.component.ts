import { Component, OnInit, ViewChild, TemplateRef, ElementRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CodeGeneratorNormalEnum, CodeGeneratorPlugInEnum } from '../../../Utility/enums/code-generator-enum';
import { Common } from '../../../Utility/service/common';
import { debounceTime } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-code-gen-normal',
  templateUrl: './code-gen-normal.component.html',
  styleUrls: ['./code-gen-normal.component.css']
})
export class CodeGenNormalComponent implements OnInit, AfterViewInit {
  @ViewChild('someOutlet') someOutlet: ElementRef;
  @ViewChild('temp') temp1: TemplateRef<any>;
  CodeGeneratorNormalEnum: typeof CodeGeneratorNormalEnum = CodeGeneratorNormalEnum;
  form: FormGroup;
  displayTemp: TemplateRef<any>;
  listData: string[] = [];
  pageObj: any = {};
  searchOption: string

  constructor(
    private _fb: FormBuilder,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      searchOption:[''],
      selType: ['', [Validators.required]],
      textAreaContent: ['', [Validators.required]]
    });
    this.initSetting();
  }

  ngAfterViewInit() {
    this.displayTemp = this.temp1;
  }

  //重設選擇框
  resetSearch() {
    this.form.get('searchOption').reset();
    this.form.get('textAreaContent').reset();
  }

  changeDivOutlet(d: any) {
    console.log(d);
  }

  //初始化頁面屬性
  private setInitPage() {
    switch (this.form.get('selType').value) {
      case 0:
        this.pageObj.listTitle = '指令選擇';
        this.listData = Common.enumsToStringArray(CodeGeneratorNormalEnum);
        break;
      case 1:
        this.pageObj.listTitle = '套件選擇';
        this.listData = Common.enumsToStringArray(CodeGeneratorPlugInEnum);
        break;
    }
    console.log(this.listData);
  }

  //初始化 form 設定
  private setInitForm() {
    this.form.get('selType').setValue(0);
  }

  private initSetting() {
    this.form.get('searchOption').valueChanges.pipe(
      debounceTime(500)
    ).subscribe(res => {
      console.log(res);
      if (!isNullOrUndefined(res)) {
        this.form.get('textAreaContent').setValue((this.someOutlet.nativeElement as HTMLElement).innerHTML.replace('#containerStart', '<ng-container>').replace('#containerEnd', '</ng-container>'));
      }
     // console.log((this.someOutlet.nativeElement as HTMLElement).innerHTML.replace('#containerStart', '<ng-container>').replace('#containerEnd', '</ng-container>'));

    });

    this.form.get('selType').valueChanges.subscribe(res => {
      this.setInitPage();
    });

    this.setInitForm();
  }
}
