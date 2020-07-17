import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CodeGeneratorNormalEnum, CodeGeneratorPlugInEnum } from '../../../Utility/enums/code-generator-enum';
import { Common } from '../../../Utility/service/common';

@Component({
  selector: 'app-code-gen-normal',
  templateUrl: './code-gen-normal.component.html',
  styleUrls: ['./code-gen-normal.component.css']
})
export class CodeGenNormalComponent implements OnInit {
  CodeGeneratorNormalEnum: typeof CodeGeneratorNormalEnum = CodeGeneratorNormalEnum;
  form: FormGroup;
  listData: string[] = [];
  pageObj: any = {};
  searchOption: string

  constructor(
    private _fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      searchOption:[''],
      selType: ['', [Validators.required]]
    });
    this.initSetting();
  }

  //重設選擇框
  resetSearch() {
    this.form.get('searchOption').reset();
  }

  //初始化頁面屬性
  private setInitPage() {
    switch (this.form.get('selType').value) {
      case 0:
        this.pageObj.listTitle = '指令選擇';
        this.listData = Common.enumsToArray(CodeGeneratorNormalEnum);
        break;
      case 1:
        this.pageObj.listTitle = '套件選擇';
        this.listData = Common.enumsToArray(CodeGeneratorPlugInEnum);
        break;
    }
  }

  //初始化 form 設定
  private setInitForm() {
    this.form.get('selType').setValue(0);
  }

  private initSetting() {
    this.form.get('selType').valueChanges.subscribe(res => {
      console.log(res);
      this.setInitPage();
    });

    this.setInitForm();
  }
}
