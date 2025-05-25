import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconvert'
})
export class CurrencyconvertPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
