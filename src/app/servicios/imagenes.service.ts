import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor() { }

  Dominioimg: string= 'https://image.tmdb.org/t/p/w500';

  Portada(img: string): string{

    let objeto: string = "";

    if(img != null){

      objeto = this.Dominioimg + img;
    }else{
      objeto = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxN3QsCpuh6LttUpoBvS0AH06It9lcoy-irzO5qAaMGUIgq7hr&usqp=CAU"
    }

    return objeto;

  }

  Dominio(): string{
    return this.Dominioimg;
  }


}
