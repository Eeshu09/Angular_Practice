import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipes'
})
export class CustompipesPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    console.log("args",args);
    if(args.length>0){
      let[data]=args;
      return value*data;
    }
    return value*5;
  }

}
