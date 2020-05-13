import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../clases/usuario';
import { LoginService } from '../../../servicios/sesion/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string;
  pass : string;

  constructor( private sesion: LoginService) { }


  IniciarS(){


    this.sesion.IniciarSesion(new Usuario(this.email,this.pass));

  }

  ngOnInit(): void {
  }

}
