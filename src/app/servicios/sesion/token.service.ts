import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(public jwtHelper: JwtHelperService) {}



  DecodificarToken(obj: any){

    return this.jwtHelper.decodeToken(obj);
  }


  GuardarToken(obj: any){
    localStorage.setItem("token", obj);
  }

  ObtenerToken(){
    return localStorage.getItem("token");
  }



  BorrarToken(){

    try {

        localStorage.removeItem("token");

    } catch (error) {

        //console.log(error)
    }

  }




}
