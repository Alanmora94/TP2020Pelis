import { Component, OnInit } from '@angular/core';
import { AgregarFavoritoService } from '../../../servicios/agregar-favorito.service';
import { HttpService } from '../../../servicios/http.service';
import {ImagenesService} from '../../../servicios/imagenes.service';
import { Favoritos } from '../../../clases/favoritos';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  Favorit: Array<Favoritos>;



  constructor(private haux: HttpService,private favorito: AgregarFavoritoService, private img : ImagenesService) { }


  Dominioimg: string= this.img.Dominio();

  ngOnInit(): void {

    this.Favorit =  this.favorito.Traerfavoritos();
    console.log(this.Favorit);



  }

}
