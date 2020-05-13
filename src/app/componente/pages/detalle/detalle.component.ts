import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../servicios/API/http.service';
import {ImagenesService} from '../../../servicios/componenetes/imagenes.service';
import {AgregarFavoritoService} from '../../../servicios/componenetes/agregar-favorito.service';
import { Favoritos } from '../../../clases/favoritos';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id : string;
  pelicula: any;
  companias: Array<any>;
  images: any[];
  cargar: boolean = false;
  listaObj: Array<any>;


  poster: string;

  constructor(private http: HttpService, private img : ImagenesService, private favAux: AgregarFavoritoService) { }



  favorito(){

    let miFavorito = new Favoritos(this.pelicula.id,this.pelicula.original_title,this.pelicula.original_language,this.pelicula.poster_path);

    this.favAux.Agregar(miFavorito);
    //console.log(miFavorito);
    //this.favAux.Agregar(id);

  }



  ngOnInit(): void {

    this.id = localStorage.getItem("idDetalle");



    this.http.ObtenerPeliculasPorId(this.id)
    .subscribe((data: JSON) => {
        this.pelicula = data;
        //this.pelicula.backdrop_path = this.img.Portada(this.pelicula.backdrop_path);

        this.pelicula.poster_path = this.img.Portada(this.pelicula.poster_path);

        this.companias = this.pelicula.production_companies;
        this.poster = this.pelicula.poster_path;
        this.cargar = true;

        for (let i = 0; i < this.companias.length; i++) {
          this.companias[i].logo_path = this.img.Portada(this.companias[i].logo_path);
        }



      }, error => {
        console.log(error);
    });



  }

}
