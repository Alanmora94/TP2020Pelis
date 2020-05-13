import { Injectable } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { HttpService } from '../API/http.service';
import { AngularFireAuth } from '@angular/fire/auth';
import {TokenService} from './token.service';
import { auth } from 'firebase/app';
import { Router } from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  paquete: JSON;
  UserName: string ="";
  sesion: boolean=false;


  constructor( private http: HttpService,public auth: AngularFireAuth, private token: TokenService, private ruta: Router) { }

  objeto: any;
  CargarUser(obj: Usuario){


    this.auth.createUserWithEmailAndPassword(obj.email,obj.password)
    .then(data => {


      data.user.updateProfile({
        displayName: obj.nombre
      }).then(() => {
        data.user.getIdToken().then(token=>{
          this.UserName = obj.nombre;
          this.GuardaruserName(this.UserName);

          console.log(token);
          this.token.GuardarToken(token);
          this.sesion =true;

          this.ruta.navigateByUrl("/listado");
        }
        )
        .catch(e=>{
          console.log("error al conseguir el token");
        });

      }).catch(e=>{
        console.log("Error al actualizar el display" + e);

      });



    })
    .catch(e =>{
      console.log(e);
    })




  }


  IniciarSesion(obj: Usuario){




    this.auth.signInWithEmailAndPassword(obj.email,obj.password)
    .then(data => {

          this.UserName = data.user.displayName;
          this.GuardaruserName(this.UserName);
          console.log("LOGIN:  " + data.user.displayName);

      data.user.getIdToken().then(token=>{


          console.log(token);
          this.token.GuardarToken(token);

          if(this.ValidarToken()){this.ruta.navigateByUrl("/listado");}


        }
        )
        .catch(e=>{
          console.log("error al conseguir el token");
        });

      }).catch(e=>{
        console.log("Error al actualizar el display" + e);

      });



}







BorrarToken(){

  localStorage.setItem("token", null);

}


GuardaruserName(obj: string){
  localStorage.setItem("UserName", obj);
}


ObtenerUserName(){

      return localStorage.getItem("UserName");

}


GetUsername(){

  let aux = this.ObtenerUserName();

  if(aux != null)
  {
    return aux;

  }else{

    return this.UserName;
  }


}

GetSesion(){

  return this.sesion;
}



ValidarToken(){


  try{

       const objToken = this.token.ObtenerToken();



    if (objToken != null) {

      const payload =  this.token.DecodificarToken(objToken);

      console.log("ESTE ES EL TOKEN " + payload["email"]);


      if(payload["email"] != null && payload["aud"] === "tppeliculas2020" ){

        this.sesion=true;
        return true;


      }else
      {
        this.token.BorrarToken();
        return false;
      }
    }else{

      return false;
    }


  } catch (error) {

   return false;

  }




}




LogOut(){

  try {

    localStorage.removeItem("UserName")

    this.UserName = '';

    this.token.BorrarToken();

    this.sesion = false;

    this.ruta.navigateByUrl("");

    localStorage.removeItem("idDetalle")

  } catch (error) {

    console.log(error);
  }

}



}
