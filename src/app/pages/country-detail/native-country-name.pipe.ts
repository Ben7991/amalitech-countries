import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nativeCountryName'
})
export class NativeCountryNamePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    if (value === undefined)
      return "";

    let nativeNames = <any>Object.values(value);
    return nativeNames[0].official;
  }

}
