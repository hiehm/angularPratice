import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicFlowService {
    static last_Id: number;
    constructor() { }
}
