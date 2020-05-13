import { Pelicula } from './pelicula';


export class Busqueda {

  total_results: number;
  results: Array<Pelicula>;


  constructor(total_results?:number,results?: Array<Pelicula>){

    this.total_results=total_results;
    this.results=results;
  }

}
