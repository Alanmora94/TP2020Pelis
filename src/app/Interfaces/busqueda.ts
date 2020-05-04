import { Pelicula } from '../Interfaces/peliculas';

export interface Busqueda {

  page: number,
  total_results: number,
  total_pages: number,
  results : Array<Pelicula>

}
