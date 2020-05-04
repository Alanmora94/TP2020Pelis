import { Injectable } from '@angular/core';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {


  private dominio : string = 'https://api.themoviedb.org/3/';
  private key : string = "?api_key=703a95c1f012bfe73ad67461472a6b91";


  constructor() { }


  public getDominio(): string {
    //return `${this.dominio}${path}`;
    return this.dominio;
  }

  public getKey(): string  {
    //return `${this.dominio}${path}`;
    return this.key;
  }

}
