import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: string, maxCharacterCount = 5): unknown {
    return `${value.substring(0, maxCharacterCount)}${value.length > maxCharacterCount ? '...' : ''}`;
  }

}
