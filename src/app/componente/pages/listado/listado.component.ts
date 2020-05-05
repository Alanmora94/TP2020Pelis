import { HttpService } from '../../../servicios/http.service';
import { ToastrService } from 'ngx-toastr';
import {ImagenesService} from '../../../servicios/imagenes.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private http: HttpService, private toastr: ToastrService, private img : ImagenesService) { }

  variable : string;
  Dominioimg: string= this.img.Dominio();
  lista : Array<any>;
  resultados : any;

  ngOnInit(): void {
    // this.listado = this.storage.listado;


}

Detalle(x){
  localStorage.setItem("idDetalle",x);

  this.http.navegar('detalle')

}




buscar(){

  this.http.ObtenerPeliculas(this.variable)
  .subscribe((data: JSON) => {

      this.resultados = data;
      this.lista = this.resultados.results;

      if (this.lista.length < 1){

        this.toastr.success('Hello world!', 'Toastr fun!');
      }




  }, error => {
      console.log(error);
  });

}


}
