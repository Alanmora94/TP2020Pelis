import { Injectable } from '@angular/core';
import { Favoritos } from '../../clases/favoritos';
import { HttpService } from '../API/http.service';

@Injectable({
  providedIn: 'root'
})
export class AgregarFavoritoService {

  lista: Array<Favoritos> = [];
  aux : any;
  miObjeto: Favoritos;


  constructor(private http: HttpService) {


  }


  public VerificarFavoritos(){

    try {

      if (localStorage.getItem("favoritos")) {


        return true;
      }

    } catch (error) {


      return false;
    }



  }

  Agregar(obj: Favoritos){



    if(this.VerificarFavoritos()){
      this.lista = JSON.parse(localStorage.getItem("favoritos"));
      let lista2: Array<any> = JSON.parse(localStorage.getItem("favoritos"));


      let replica=false;

      for (let index = 0; index < lista2.length; index++) {
        const element = lista2[index];

        if (element["id"] == obj["id"]) {

          replica = true;
        }

      }




      if(!replica){

      this.lista.push(obj);

      localStorage.setItem("favoritos", JSON.stringify(this.lista));

      }



    }else{



      this.lista.push(obj);

      localStorage.setItem("favoritos", JSON.stringify(this.lista));


    }



  }


  Traerfavoritos(){

    return JSON.parse(localStorage.getItem("favoritos"));


  }





}
