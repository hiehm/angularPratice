import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * // \\從字串轉換過去後 \顯示特殊字元 \ => \d
 * */
export enum regexExample {
  regex1 = '^[A-Za-z][12]\\d{8}$',
  regex2 = '^(http)[s]?://(w{3}.)?(\\w*|[-]?)+\.(com|org)(\.(\\w)+)*$'
}

export enum regexPraticeEnum {
  no1 = '^.*(bat|bit|but|hat|hit|hut)+.*$',
  no2 = '^\\S+(\\s\\w+)+$',
  no3 = '^\\S+([\\s|,]\\w+)+$',
  no4 = '^[^\\d\\Wtry].*$',
  no5 = '^\\d{4}(\\s\\w+){2,}$',
  no6 = '^(http)[s]?://w{3}\.\\w+(\.\\w{2,}).*$',
  no7 = '^[^\\d\\Wtry]*=\\d+$',
  no8 = '^[^\\d\\Wtry]*=\\d+L$',
  no9 = '^[^\\d\\Wtry]*=\\d+\.\\d+$',
  no10 = '^-?\\d*(\.)?(\\s|e-)?(\\d+j)$'
}

@Component({
  selector: 'app-praticejs-regular-expression',
  templateUrl: './praticejs-regular-expression.component.html',
  styleUrls: ['./praticejs-regular-expression.component.css']
})



export class PraticejsRegularExpressionComponent implements OnInit {
  form: FormGroup;
  regexExample: typeof regexExample = regexExample;
  regexPraticeEnum: typeof regexPraticeEnum = regexPraticeEnum;
  praticePageNum: number = 1;
  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      regex1: ['', [Validators.required, Validators.pattern(regexExample.regex1)]],
      regex2: ['', [Validators.required, Validators.pattern(regexExample.regex2)]],
      no1: ['', [Validators.required, Validators.pattern(regexPraticeEnum.no1)]],
      no2: ['', [Validators.required, Validators.pattern(regexPraticeEnum.no2)]],
      no3: ['', [Validators.required, Validators.pattern(regexPraticeEnum.no3)]],
      no4: ['', [Validators.required, Validators.pattern(regexPraticeEnum.no4)]],
      no5: ['', [Validators.required, Validators.pattern(regexPraticeEnum.no5)]],
      no6: ['', [Validators.required, Validators.pattern(regexPraticeEnum.no6)]],
      no7: ['', [Validators.required, Validators.pattern(regexPraticeEnum.no7)]],
      no8: ['', [Validators.required, Validators.pattern(regexPraticeEnum.no8)]],
      no9: ['', [Validators.required, Validators.pattern(regexPraticeEnum.no9)]],
      no10: ['', [Validators.required, Validators.pattern(regexPraticeEnum.no10)]],
    });
    this.initSetting();
  }

  private initSetting() {
    this.form.valueChanges.subscribe(res => {
      // console.log(this.form.controls.regex1);
    });
  }
}

