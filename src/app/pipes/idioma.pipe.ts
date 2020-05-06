import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idioma'
})
export class IdiomaPipe implements PipeTransform {

  transform(value: string): string {

    let idioma: string;

    switch (value) {
      case 'en':
          idioma = 'Ingles';
        break;

      case 'es':
          idioma = 'Español';
        break;

      default:
        idioma = 'indefinido';
        break;
    }

    return idioma;
  }

}
