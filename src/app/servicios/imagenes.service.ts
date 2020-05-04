import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor() { }

  Dominioimg: string= 'https://image.tmdb.org/t/p/w500';

  Portada(img: string): string{
    let objeto = this.Dominioimg + img;
    return objeto;

  }

  Dominio(): string{
    return this.Dominioimg;
  }


}
