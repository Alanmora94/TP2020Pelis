import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Pelicula } from '../../../../clases/pelicula';
import { HttpService } from '../../../../servicios/API/http.service';
import { ToastrService } from 'ngx-toastr';
import { Busqueda } from '../../../../clases/busqueda';


@Component({
  selector: 'app-lista-pelicula',
  templateUrl: './lista-pelicula.component.html',
  styleUrls: ['./lista-pelicula.component.css']
})
export class ListaPeliculaComponent implements OnInit {


  constructor(private http: HttpService, private toastr: ToastrService) { }

  pageActual: number= 1;
  _peliculaLista: Array<Pelicula>;


  lista : Array<Pelicula>;
  resultados: Busqueda;
  popular: boolean;
  _tiempo: boolean= false;



  Detalle(x){
    localStorage.setItem("idDetalle",x);

    this.http.navegar('detalle')

  }

  tiempo(x){

    this._tiempo= x;
  }


  buscar(event){



    this.http.ObtenerPeliculas(event)
    .subscribe((data: JSON) => {

      this.resultados = Object.assign(new Busqueda(), data);

      if(this.resultados != null){

        this.lista = this.resultados.results;
        this.popular = false;
        //console.log(this.resultados);

      }

      }, error => {
        console.log("ERROR: " + error);
    });


  }






  ngOnInit(): void {



    this.popular=true;

    this.http.ObtenerPeliculasPopulares()
    .subscribe((data: JSON) => {

      this.resultados = Object.assign(new Busqueda(), data);

      if(this.resultados != null){

        this.lista = this.resultados.results;

      }

      }, error => {
        console.log("ERROR: " + error);
    });

  }

}
