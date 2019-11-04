import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-accept-other-post',
  templateUrl: './accept-other-post.component.html',
  styleUrls: ['./accept-other-post.component.css']
})
export class AcceptOtherPostComponent{
  form: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(res => {
      console.log(res['uuid']);
      console.log(res['strEMP_NO']);
    });
  }
}
