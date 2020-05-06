import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: Array<any>, arg: string): Array<any> {

    console.log("pepito: " + arg);
    if(arg == '' || arg.length < 3 ) return value;

    const resultado = [];
    for (const post of value) {
      if(post.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1){

        resultado.push(post);
      };

    };
    return resultado;
  }

}
