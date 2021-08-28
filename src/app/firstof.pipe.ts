import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstof'
})
export class FirstofPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return '- ' + value + ' not at all';
  }
}