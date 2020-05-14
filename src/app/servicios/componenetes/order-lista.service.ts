import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderListaService {

  constructor() { }



  ordenarAsc(lista: Array<any>, campo: string, modo: boolean): Array<any>{


    if(modo){

      return lista.sort((a, b)=>( a.campo > b.campo) ? 1 : -1 );
    }else{

      return lista.sort((a, b)=>( a.campo < b.campo) ? 1 : -1 );
    }



  }


  OrdenarPeliculas(lista: Array<any>, campo: string,): Array<any>{


    if(campo == "anio"){

      return lista.sort((a, b)=>( a.release_date > b.release_date) ? 1 : -1 );


    }else{

      return lista.sort((a, b)=>( a.original_title > b.original_title) ? 1 : -1 );
    }




  }






}
