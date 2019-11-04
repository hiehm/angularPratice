import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-firebase-test',
  templateUrl: './firebase-test.component.html',
  styleUrls: ['./firebase-test.component.css']
})
export class FirebaseTestComponent implements OnInit {
  items$: Observable<any[]>;
  itemValue: string = '';
  constructor(
    public _db: AngularFireDatabase
  ) {
    //讀取RealTime Database資料
    this.items$ = this._db.list('items').valueChanges();
    //資料異動變更時,當下回傳異動的一筆
    this._db.list('items').stateChanges().subscribe(res => {
      console.log(res);
    });
    //資料異動變更時,當下回傳異動的一組
    this._db.list('items').auditTrail().subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
    console.log(this._db);
   
  }

  onSubmit() {
    //寫入RealTime Database資料
    this._db.list('items').push({ content: this.itemValue });
    this.itemValue = '';
  }

}
