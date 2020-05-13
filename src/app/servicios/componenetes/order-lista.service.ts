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




}
