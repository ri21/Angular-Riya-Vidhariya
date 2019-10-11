import { Pipe, PipeTransform } from '@angular/core';
import {isNullOrUndefined, isNumber} from 'util';

@Pipe({
  name: 'numberToWord'
})
export class NumberToWordPipe implements PipeTransform {

  private words: Map<number, string> = new Map<number, string>([
    [0, 'zero'],
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine']
  ]);

  transform(value: any, args?: any): any {
    let finalValue = '';
    if (!isNullOrUndefined(value) && value !== '') {
      const valuesArray: Array<string> = value.toString().split('');
      valuesArray.forEach(element => {
        if (Number(element) || element === '0') {
          const numberVal = Number(element);
          finalValue += this.words.get(numberVal);
        } else {
          finalValue += element;
        }
      });
    }
    return finalValue;
  }

}
