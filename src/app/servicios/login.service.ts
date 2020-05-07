import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { HttpService } from '../servicios/http.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  paquete: JSON;

  constructor( private http: HttpService) { }


  CargarUser(obj: Usuario){

      this.http.LogUp(obj)
      .subscribe((data: JSON) => {

        this.paquete = data;


        this.GuardarToken(this.paquete["respuesta"]);

      }, error => {
          console.log(error);
      });

  }


  IniciarSesion(obj: Usuario){

    this.http.LogIn(obj)
    .subscribe((data: JSON) => {

      this.paquete = data;
      this.GuardarToken(this.paquete["respuesta"]);

    }, error => {
        console.log(error);
    });

}




GuardarToken(obj: any){

  localStorage.setItem("token", JSON.stringify(obj));



}


BorrarToken(){

  localStorage.setItem("token", null);

}




}
