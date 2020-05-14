import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../clases/usuario';
import { LoginService } from '../../../servicios/sesion/login.service';
import { FormControl, FormBuilder ,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.css']
})
export class LogUpComponent implements OnInit {

  formulario: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public contactForm: FormGroup;

  _nombre:string;
  _email:string;
  _pass:string;

  constructor( private sesion: LoginService, private frmbuilder: FormBuilder) {

    this.formulario = this.frmbuilder.group( {

      pass: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required, Validators.minLength(4)]],
     email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]});

   }

   get pass() { return this.formulario.get('pass'); }
   get name() { return this.formulario.get('nombre'); }
   get email() { return this.formulario.get('email'); }

   /*
   get name() { return this.contactForm.get('name'); }
   get email() { return this.contactForm.get('email'); }
   get password() { return this.contactForm.get('message'); }

   createForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)])
    });
  }


  onResetForm(): void {
    this.contactForm.reset();
  }


  onSaveForm(): void {
    if (this.contactForm.valid) {


      //this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
    }
  }
*/

Registrar(){

    //console.log(aux);

    if(this.formulario.valid){

      this.sesion.CargarUser(new Usuario(this._email,this._pass,this._nombre,));
    }
    //

  }

  ngOnInit(): void {
  }


}
