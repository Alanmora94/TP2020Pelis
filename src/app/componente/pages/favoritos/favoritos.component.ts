import { Component, OnInit } from '@angular/core';
import { AgregarFavoritoService } from '../../../servicios/componenetes/agregar-favorito.service';
import {ImagenesService} from '../../../servicios/componenetes/imagenes.service';
import {OrderListaService} from '../../../servicios/componenetes/order-lista.service';
import { Favoritos } from '../../../clases/favoritos';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  Favorit: Array<Favoritos>;
  ascendente : boolean = true;
  buscar: string = '';


  constructor(private favorito: AgregarFavoritoService, private img : ImagenesService, private orden: OrderListaService) { }


  Dominioimg: string= this.img.Dominio();


  Ordenarasc(campo: string){

    this.Favorit = this.orden.ordenarAsc(this.Favorit,campo,true);

  }

  Ordenardesc(campo: string){

    this.Favorit = this.orden.ordenarAsc(this.Favorit,campo,false);
  }


  ngOnInit(): void {

    this.Favorit =  this.favorito.Traerfavoritos();

  }

}
