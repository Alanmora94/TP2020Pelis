import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Pelicula } from '../../../../clases/pelicula';
import {ImagenesService} from '../../../../servicios/componenetes/imagenes.service';


@Component({
  selector: 'app-card-pelicula',
  templateUrl: './card-pelicula.component.html',
  styleUrls: ['./card-pelicula.component.css']
})
export class CardPeliculaComponent implements OnInit {

  constructor(private img : ImagenesService) { }

  Dominioimg: String = this.img.Dominio();
  portada: string;
  _pelicula: Pelicula;


  @Input()
  public set Pelicula (obj : Pelicula){

    this._pelicula = obj;


    this.portada = this.Dominioimg.concat(this._pelicula.poster_path);

  }


  ngOnInit(): void {
  }


}
