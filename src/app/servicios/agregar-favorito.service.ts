import { Injectable } from '@angular/core';
import { Favoritos } from '../clases/favoritos';
import { HttpService } from '../servicios/http.service';

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

    console.log("LELEL: " + obj);
    //console.log("prueba 22 :" + this.TraerDatosFavorito('551'));
    //console.log("objeto a agregar:" + obj);

    if(this.VerificarFavoritos()){
      this.lista = JSON.parse(localStorage.getItem("favoritos"));

      this.lista.push(obj);

      localStorage.setItem("favoritos", JSON.stringify(this.lista));
    }else{

      this.lista.push(obj);

      localStorage.setItem("favoritos", JSON.stringify(this.lista));
      //console.log("entro " + id);

    }



  }


  Traerfavoritos(){

    return JSON.parse(localStorage.getItem("favoritos"));


  }





}
