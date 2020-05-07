import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../clases/usuario';
import { LoginService } from '../../../servicios/login.service';

@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.css']
})
export class LogUpComponent implements OnInit {

  nombre: string;
  email : string;
  pass : string;

  constructor( private sesion: LoginService) { }


  Registrar(){


    this.sesion.CargarUser(new Usuario(this.nombre,this.email,this.pass));

  }

  ngOnInit(): void {
  }


}
