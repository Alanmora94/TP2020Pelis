import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ConfigService } from './servicios/config.service';
import { HttpService } from './servicios/http.service';
import {ImagenesService} from './servicios/imagenes.service';

import { MenuComponent } from './componente/pages/menu/menu.component';
import { ListadoComponent } from './componente/pages/listado/listado.component';
import { AppComponent } from './app.component';
import { DetalleComponent } from './componente/pages/detalle/detalle.component';
import { FavoritosComponent } from './componente/pages/favoritos/favoritos.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoComponent,
    DetalleComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()

  ],
  providers: [ConfigService,
    HttpService,
    ImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
