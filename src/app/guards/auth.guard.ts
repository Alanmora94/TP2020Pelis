import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../servicios/sesion/token.service';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router : Router, private tokenSer: TokenService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //return false;

       try{

        console.log("entro en el guard");

         const token = this.tokenSer.ObtenerToken();

        console.log("aaaa " + token);

        if (token != null) {

          const payload =  this.tokenSer.DecodificarToken(token);

          console.log("ESTE ES EL TOKEN " + payload["email"]);


          if(payload["email"] != null && payload["aud"] === "tppeliculas2020" ){

            return true;
          }else
          {
            return false;
          }
        }else{
          this.router.navigateByUrl("login");
          return false;
        }


      } catch (error) {

        this.router.navigateByUrl("login");
        return false;

      }


  }

}
