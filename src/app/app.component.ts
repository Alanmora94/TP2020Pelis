import { Component } from '@angular/core';
import { HttpService } from './servicios/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private http: HttpService) { }

  lista : Array<any>

  ngOnInit(): void {

}

}
