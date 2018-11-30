import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
//FormBuilder 可簡化FormGroup建置程式碼
//Validators 加入驗證器

@Component({
  selector: 'app-valid-reactive-form',
  templateUrl: './valid-reactive-form.component.html',
  styleUrls: ['./valid-reactive-form.component.css']
})

export class ValidReactiveFormComponent {
  //myReactiveForm = new FormGroup({
  //  name: new FormControl() //欄位name
  //})
  myReactiveForm: FormGroup; //指定myForm為FormGroup類型
  states: string[] = [
    '中正', '和平'
  ]

  constructor(private myFormBuilder: FormBuilder) {
    this.AddForm();
  }

  AddForm(): void {
    this.myReactiveForm = this.myFormBuilder.group({ //父層 formGroup
      name: ['', 
        [Validators.maxLength(4), Validators.required] //預設為Validator.compose([ValidatorArray])
      ],
      email: ['', Validators.email],
      address: this.myFormBuilder.group({ //子層 formGroup
        street: [''],
        city: '',
        state: '',
        zip: ''
      })
      //指定欄位name為FormControl,預設值為''
      //[DefaultValue,ValidatorType],DefaultValue為預設值,ValidatorType指定驗證器型式
    });
    //let emailControl = this.myFormBuilder.control({
    //  email: new FormControl
    //});
    //this.myReactiveForm.addControl(emailControl)
  }
  Clear(): void {
    this.myReactiveForm.reset();
  }
}
