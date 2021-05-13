import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * // \\從字串轉換過去後 \顯示特殊字元 \ => \d
 * */
export enum regexExample {
  regex1 = '^[A-Za-z]{1}(1|2){1}\\d{8}$',
  regex2 = '^(http)[s]?://(w{3}.)?(\\w*|[-]?)+\.(com|org){1}(\.(\\w)+)*$'
}

@Component({
  selector: 'app-praticejs-regular-expression',
  templateUrl: './praticejs-regular-expression.component.html',
  styleUrls: ['./praticejs-regular-expression.component.css']
})



export class PraticejsRegularExpressionComponent implements OnInit {
  form: FormGroup;
  regexExample: typeof regexExample = regexExample;
  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      regex1: ['', [Validators.required, Validators.pattern(regexExample.regex1)]],
      regex2: ['', [Validators.required, Validators.pattern(regexExample.regex2)]]
    });
    this.initSetting();
  }

  private initSetting() {
    this.form.valueChanges.subscribe(res => {
     // console.log(this.form.controls.regex1);
    });
  }
}

