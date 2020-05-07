export class Usuario {

  nombre: string;
  email: string;
  password: string;

  constructor(email: string, pass: string,nom?: string){

    this.email=email;
    this.password=pass;

    if(nom)
    this.nombre=nom;


  }

}

