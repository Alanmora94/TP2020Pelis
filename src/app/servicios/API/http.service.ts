import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Usuario } from '../../clases/usuario';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private config : ConfigService, private http : HttpClient, private rutas: Router) { }



ObtenerPeliculas(peli: string){

let vari = this.config.getDominio() + 'search/movie' + this.config.getKey() + '&query=' + peli;

 return this.http.get<JSON>(vari);
}


ObtenerPeliculasPopulares(){

  let vari = this.config.getDominio() + 'movie/popular' + this.config.getKey();
   return this.http.get<JSON>(vari);
  }



ObtenerPeliculasPorId(id: string){

  let vari = this.config.getDominio() + 'movie/' + id + this.config.getKey();

  return this.http.get<JSON>(vari);

 }



navegar(dir: string){



  this.rutas.navigateByUrl(dir);
}



LogUp(obj: Usuario){

  let vari = this.config.getSesion() + '/register';

    return this.http.post<JSON>(vari,{email: obj.email,name: obj.nombre,pass: obj.password});
  }


  LogIn(obj: Usuario){

    let vari = this.config.getSesion() + '/login';

      return this.http.post<JSON>(vari,{email: obj.email,pass: obj.password});
    }



}
