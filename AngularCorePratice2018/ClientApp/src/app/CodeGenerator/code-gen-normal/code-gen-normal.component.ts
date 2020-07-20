import { Component, OnInit, ViewChild, TemplateRef, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';
import { Common } from '../../../Utility/service/common';
import { CodeGenTemplateDirective } from '../../../Utility/directive/code-gen-template.directive';
import { ReplaceAngularWordLetterPipe } from '../../../Utility/pipe/replace-angular-word-letter.pipe';
import { CodeGeneratorNormalEnum, CodeGeneratorPlugInEnum } from '../../../Utility/enums/code-generator-enum';
import { debounceTime } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';



@Component({
  selector: 'app-code-gen-normal',
  templateUrl: './code-gen-normal.component.html',
  styleUrls: ['./code-gen-normal.component.css']
})
export class CodeGenNormalComponent implements OnInit, AfterViewInit {
  @ViewChild('someOutlet') someOutlet: ElementRef;
  @ViewChildren(CodeGenTemplateDirective) tempList: QueryList<CodeGenTemplateDirective>;
  CodeGeneratorNormalEnum: typeof CodeGeneratorNormalEnum = CodeGeneratorNormalEnum;
  form: FormGroup;
  displayTemp: TemplateRef<any>;
  listData: string[] = [];
  pageObj: any = {};
  currentOpt: string;

  constructor(
    private _fb: FormBuilder,
    private replacePipe: ReplaceAngularWordLetterPipe,
    private clipboard: Clipboard
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

  }

  //重設選擇框
  resetSearch() {
    this.form.get('searchOption').reset();
    this.form.get('textAreaContent').reset();
  }

  //輸入框事件
  onTextareaKeyup(e: KeyboardEvent) {
    if (e.ctrlKey && e.which === 65) {
      this.clipboard.copy(this.form.get('textAreaContent').value);
      alert('copy');
    }
    console.log(e);
  }

  //偵測TemplateOutlet載入模板
  observeTemplateChange() {
    this.form.get('textAreaContent').setValue(this.replacePipe.transform((this.someOutlet.nativeElement as HTMLElement).innerHTML, this.currentOpt));
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
        //由此開始- 選擇模板
        this.currentOpt = res;
        const findTempIndex = this.listData.findIndex(x => x === res);
        this.displayTemp = this.tempList.find((item, index) => index === findTempIndex).templateRef;
      }
    });

    this.form.get('selType').valueChanges.subscribe(res => {
      this.setInitPage();
    });

    this.setInitForm();
  }
}
