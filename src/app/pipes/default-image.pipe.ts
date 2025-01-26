import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string, fallback: string = 'assets/images/default.jpg'): string {
    return value && value.trim() !== '' ? value : fallback;
  }
}
