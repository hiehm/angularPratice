import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface BaseHttpConfig {
  isKey: boolean;
}
@Injectable({
  providedIn: 'root'
})

export class FirebaseHttpService {

  constructor(
    private _db: AngularFireDatabase
  ) { }

  // 重新時做取得object的方法，並且給config預設值為true，因為大多時候我們都需要key值
  object<T>(url: string, config: BaseHttpConfig = { isKey: true }): Observable<T> | Observable<any> {
    const req = this._db.object(url);
    return config.isKey ?
      req.snapshotChanges().pipe(map(action => ({ key: action.key, ...action.payload.val() }))) :
      req.valueChanges();
  }

  // 重新時做取得list的方法，同樣給key為true
  list<T>(url: string, config: BaseHttpConfig = { isKey: true }): Observable<T> | Observable<any> {
    const req = this._db.list(url);
    return config.isKey ?
      req.snapshotChanges().pipe(map(actions => actions.map(action => ({ key: action.key, ...action.payload.val() })))) :
      req.valueChanges();
  }
}
