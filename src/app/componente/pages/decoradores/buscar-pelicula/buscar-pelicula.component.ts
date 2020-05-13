import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-buscar-pelicula',
  templateUrl: './buscar-pelicula.component.html',
  styleUrls: ['./buscar-pelicula.component.css']
})
export class BuscarPeliculaComponent implements OnInit {

  constructor() { }


  PeliBuscar: string;

  @Output() EnviarBusqueda = new EventEmitter<any>();


  ngOnInit(): void {
  }



  Enviar(){


    this.EnviarBusqueda.emit(this.PeliBuscar);

  }


}
