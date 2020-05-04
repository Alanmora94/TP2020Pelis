import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../servicios/http.service';
import {ImagenesService} from '../../../servicios/imagenes.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id : string;
  pelicula: any;


  constructor(private http: HttpService, private img : ImagenesService) { }

  ngOnInit(): void {

    this.id = localStorage.getItem("idDetalle");



    this.http.ObtenerPeliculasPorId(this.id)
    .subscribe((data: JSON) => {
        console.log(data);
        console.log("LALALALAL");
        this.pelicula = data;
        this.pelicula.backdrop_path = this.img.Portada(this.pelicula.backdrop_path);
        this.pelicula.poster_path = this.img.Portada(this.pelicula.poster_path);
        console.log("ruta: " + this.pelicula.backdrop_path);
      }, error => {
        console.log(error);
    });

  }

}
