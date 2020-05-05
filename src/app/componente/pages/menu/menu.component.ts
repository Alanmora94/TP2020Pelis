import { Component, OnInit } from '@angular/core';
import {AgregarFavoritoService} from '../../../servicios/agregar-favorito.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  favFlag: Boolean = false;
  constructor(private fav: AgregarFavoritoService) { }


  public Getfavorito(){

    return this.fav.VerificarFavoritos()
  }


  ngOnInit(): void {

    this.favFlag = this.fav.VerificarFavoritos()

    /*
    this.fav.VerificarFavoritos()
      .subscribe((arg : Boolean)=> { this.favFlag = arg), error => {
        console.log(error);
      });
    ;



    this.fav.VerificarFavoritos()
    .subscribe((data: JSON) => {


      }, error => {
        console.log(error);
    });
*/


  }

}
