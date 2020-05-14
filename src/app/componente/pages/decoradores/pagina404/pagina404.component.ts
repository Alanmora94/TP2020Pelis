import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pagina404',
  templateUrl: './pagina404.component.html',
  styleUrls: ['./pagina404.component.css']
})
export class Pagina404Component implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }


  volver(){

    this.ruta.navigateByUrl("")
  }

}
