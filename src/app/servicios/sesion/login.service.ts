import { Injectable } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { HttpService } from '../API/http.service';
import { AngularFireAuth } from '@angular/fire/auth';
import {TokenService} from './token.service';
import { auth } from 'firebase/app';
import { Router } from "@angular/router";
import {NotificacionService} from '../componenetes/notificacion.service'




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  paquete: JSON;
  UserName: string ="";
  sesion: boolean=false;


  constructor( private http: HttpService,public auth: AngularFireAuth, private token: TokenService, private ruta: Router, private notificacion: NotificacionService) { }

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


          this.token.GuardarToken(token);
          this.sesion =true;
          this.notificacion.LogUp(this.UserName);
          this.ruta.navigateByUrl("/listado");
        }
        )
        .catch(e=>{
          //console.log("error al conseguir el token");
        });

      }).catch(e=>{
        //console.log("Error al actualizar el display" + e);

      });



    })
    .catch(e =>{
      //console.log(e);
    })




  }


  IniciarSesion(obj: Usuario){


    try {


    this.auth.signInWithEmailAndPassword(obj.email,obj.password)
    .then(data => {

          this.UserName = data.user.displayName;
          this.GuardaruserName(this.UserName);


      data.user.getIdToken().then(token=>{



          this.token.GuardarToken(token);

          if(this.ValidarToken()){
            this.notificacion.LogIn(this.GetUsername());
            this.ruta.navigateByUrl("/listado");}


        }
        )
        .catch(e=>{
          //console.log("error al conseguir el token");
        });

      }).catch(e=>{

        this.notificacion.ErrorLogin();

      });

    } catch (error) {

        //console.log("error de login");
    }



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

    this.ruta.navigateByUrl("/login");

    this.notificacion.LogOut(this.GetUsername());
    localStorage.removeItem("idDetalle")

  } catch (error) {

    //console.log(error);
  }

}



}
