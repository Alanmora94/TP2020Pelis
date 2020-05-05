import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private config : ConfigService, private http : HttpClient, private rutas: Router) { }

//return `${this.dominio}${path}`;

ObtenerPeliculas(peli: string){

let vari = this.config.getDominio() + 'search/movie' + this.config.getKey() + '&query=' + peli;
//console.log("variable: " + vari);
 //return this.http.get<JSON>('https://api.themoviedb.org/3/search/movie?api_key=703a95c1f012bfe73ad67461472a6b91&query=' + peli);
 return this.http.get<JSON>(vari);
}



ObtenerPeliculasPorId(id: string){

  let vari = this.config.getDominio() + 'movie/' + id + this.config.getKey();
  //console.log("variable: " + vari);
  //return this.http.get<JSON>('https://api.themoviedb.org/3/search/movie?api_key=703a95c1f012bfe73ad67461472a6b91&query=' + peli);
  return this.http.get<JSON>(vari);

 }



navegar(dir: string){


  //console.log(dir);
  this.rutas.navigateByUrl(dir);
}

}
