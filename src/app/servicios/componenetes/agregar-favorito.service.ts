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

      console.log(error);
      return false;
    }



  }

  Agregar(obj: Favoritos){

    console.log("LELEL: " + obj["id"]);
    //console.log("prueba 22 :" + this.TraerDatosFavorito('551'));
    //console.log("objeto a agregar:" + obj);

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

      console.log("entra por aca");

      this.lista.push(obj);

      localStorage.setItem("favoritos", JSON.stringify(this.lista));
      //console.log("entro " + id);

    }



  }


  Traerfavoritos(){

    return JSON.parse(localStorage.getItem("favoritos"));


  }





}
