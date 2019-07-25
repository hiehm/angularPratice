import { Component, ViewChild } from '@angular/core';
import { ExportDirectiveDirective } from '../../Directive/export-directive.directive';
@Component({
  selector: 'app-my-control-master',
  templateUrl: './my-control-master.component.html',
  styleUrls: ['./my-control-master.component.css']
})
export class MyControlMasterComponent{
  @ViewChild('color', { static: true }) color: ExportDirectiveDirective;

  userInfo = {
    name: 'Mike',
    age: 18
  };

  log(event) {
    console.log(event);
  }
  changeColor() {
    this.color.changeColor('black');
  }
}
