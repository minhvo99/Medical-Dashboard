import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PhoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    
    // return `(+84)${value.replace(/-/g,'')}`;
    return `(${value.slice(0,3)})${value.slice(4)}`
  }

}
