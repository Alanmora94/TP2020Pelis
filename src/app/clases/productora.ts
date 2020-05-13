export class Productora {


  id: number;
  logo_path: String;
  name: String ;
  origin_country: String;


  constructor(id?:number,logo_path?:string,name?:string,origin_country?:string){

    this.id=id;
    this.logo_path=logo_path;
    this.name=name;
    this.origin_country=origin_country;

  }



}
