import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PraticeService {
  private apiUrl= 'https://localhost:5001/api/';
  constructor(
    private _httpClient: HttpClient
  ) { }

  //Cors
  callCorsApi(): Observable<any> {
    return this._httpClient.get(`${this.apiUrl}Cors/TestCors`);
  }

  //Product
  callProductApi(): Observable<any> {
    return this._httpClient.get(`${this.apiUrl}Default/MyGet`)
  }
}
