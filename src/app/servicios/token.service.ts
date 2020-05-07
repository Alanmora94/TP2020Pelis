import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(public jwtHelper: JwtHelperService) {}


  //console.log(this.jwtHelper.decodeToken(token)); // token


  DecodificarToken(obj: any){

    return this.jwtHelper.decodeToken(obj);
  }


}
