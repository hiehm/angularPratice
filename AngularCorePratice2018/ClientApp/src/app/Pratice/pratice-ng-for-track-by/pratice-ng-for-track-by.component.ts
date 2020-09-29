import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-pratice-ng-for-track-by',
  templateUrl: './pratice-ng-for-track-by.component.html',
  styleUrls: ['./pratice-ng-for-track-by.component.css']
})
export class PraticeNgForTrackByComponent implements OnInit {
  form: FormGroup
  public formAr: FormArray;
  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      ar: this._fb.array([this._fb.group({
        id: 1,
        name: 'MATT'
      }), this._fb.group({
        id: 2,
        name: 'MARY'
      })]),
      ar2: this._fb.array([this._fb.group({
        id: 1,
        name: 'MATT'
      }), this._fb.group({
        id: 2,
        name: 'MES'
      }), this._fb.group({
        id: 3,
        name: 'MARY'
      }), this._fb.group({
        id: 4,
        name: 'MARY'
      }), this._fb.group({
        id: 5,
        name: 'MARY'
      })])
    });
    this.formAr = (<FormArray>this.form.get('ar'));
    console.log(this.formAr);
  }
  array = [
    { "id": 1, "name": "bill" },
    { "id": 2, "name": "bob" },
    { "id": 3, "name": "billy" }
  ]

  foo() {
    this.array = [
      { "id": 1, "name": "foo" },
      { "id": 2, "name": "bob" },
      { "id": 3, "name": "billy" },
      { "id": 4, "name": "MATT" }
    ]
  }

  identify(index, item) {
    return item.id;
  }

  changeArData() {
    this.formAr = (<FormArray>this.form.get('ar2'));
  }

  clearData() {
    this.formAr.clear();
  }
}


