import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../clases/usuario';
import { LoginService } from '../../../servicios/sesion/login.service';
import { FormControl, FormBuilder ,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  formulario: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  _email : string;
  _pass : string;

  constructor( private sesion: LoginService, private frmbuilder: FormBuilder) {


    this.formulario = this.frmbuilder.group( {

      pass: ['', [Validators.required]],
     email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]});

   }

   get pass() { return this.formulario.get('pass'); }
   get email() { return this.formulario.get('email'); }


  IniciarS(){

    if(this.formulario.valid){
      this.sesion.IniciarSesion(new Usuario(this._email,this._pass));
    }
  }

  ngOnInit(): void {
  }

}
