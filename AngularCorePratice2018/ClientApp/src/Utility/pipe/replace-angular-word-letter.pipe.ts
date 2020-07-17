import { Pipe, PipeTransform } from '@angular/core';
import { CodeGeneratorNormalEnum } from '../enums/code-generator-enum';

@Pipe({
  name: 'replaceAngularWordLetter'
})
export class ReplaceAngularWordLetterPipe implements PipeTransform {

  transform(value: string, opt: string): any {
    return this.startReplace(value,opt);
  }

  private startReplace(value: string, opt: string) {
    return this.replaceAgnularToKeyWord(
      this.repalceHtmlDefaultKeyWord(
        this.replaceHtmlDefaultToWhiteSpace(value)
      ), opt);
  }

  private replaceHtmlDefaultToWhiteSpace(value: string): string {
    const start = value.indexOf('<!--');
    let end = value.indexOf('-->');
    if (start > -1 && end > -1) {
      end += 3;
      value= value.replace(value.substring(start, end), '');
    }
    return value;
  }

  private repalceHtmlDefaultKeyWord(value: string) {
    const b = value.substring(value.indexOf('_ngcontent'));
    value= value.replace(b.substring(b.indexOf("_ngcontent"), b.indexOf('">') + 1), '');
    return value.replace('#br', '&#13;&#10;');
  }

  private replaceAgnularToKeyWord(value: string, opt: string) {
    switch (opt) {
      case CodeGeneratorNormalEnum.ngFor:
        value = value.replace('#containerStart', '<ng-container *ngFor="let item of items">');
        break;
      case CodeGeneratorNormalEnum.ngIf:
        value = value.replace('#containerStart', '<ng-container *ngIf="yourVariable">');
        break;
      default:
        console.log('fail');
        break;
    }
    return value.replace('#containerEnd','</ng-container>');
  }
}
