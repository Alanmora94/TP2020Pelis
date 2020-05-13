import { Component, OnInit } from '@angular/core';
import {AgregarFavoritoService} from '../../../servicios/componenetes/agregar-favorito.service';
import { LoginService } from '../../../servicios/sesion/login.service';
import { TokenService } from '../../../servicios/sesion/token.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  favFlag: Boolean = false;
  usuario: string;


  constructor(private fav: AgregarFavoritoService,public sesion: LoginService) { }





  public Getfavorito(){

    return this.fav.VerificarFavoritos()
  }


  ngOnInit(): void {

    this.favFlag = this.fav.VerificarFavoritos()

    this.sesion.ValidarToken();

    this.usuario = this.sesion.GetUsername();



  }

}
