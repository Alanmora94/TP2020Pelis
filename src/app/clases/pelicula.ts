import {Productora} from './productora';
import {Pais} from './pais';

export class Pelicula {


  backdrop_path: string;
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  production_companies: Array<Productora>;
  production_countries: Array<Pais>;
  release_date: string;
  //belongs_to_collection: String;



constructor(backdrop_path?:string,homepage?:string,id?:number,original_language?:string,original_title?:string,overview?:string,poster_path?:string,
  production_companies?:Array<Productora>,production_countries?:Array<Pais>,release_date?:string,belongs_to_collection?:string){


    this.backdrop_path=backdrop_path;
    this.homepage=homepage;
    this.id=id;
    this.original_language=original_language;
    this.original_title=original_title;
    this.overview=overview;
    this.poster_path=poster_path;
    this.production_companies=production_companies;
    this.production_countries=production_countries;
    this.release_date=release_date;
    //this.belongs_to_collection=belongs_to_collection;


}


}
