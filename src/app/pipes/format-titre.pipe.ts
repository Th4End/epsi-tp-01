import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTitre'
})
export class FormatTitrePipe implements PipeTransform {

  transform(value: string): string 
  {
    if(!value)
      {
      return '';
    }
    const formatted = value.replace(/_/g, ' ').toLowerCase().split(' ');
    formatted[0] = formatted[0].toUpperCase();
    return formatted.join(' ');
  }

}
