import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';


import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatSliderModule } from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";

import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';

//import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
//import {MenuItem} from 'primeng/api';                  //api
//import {GalleriaModule} from 'primeng/galleria';



import { TokenService } from './servicios/sesion/token.service';
import { ConfigService } from './servicios/API/config.service';
import { LoginService } from './servicios/sesion/login.service';
import { HttpService } from './servicios/API/http.service';
import {ImagenesService} from './servicios/componenetes/imagenes.service';
import {AgregarFavoritoService} from './servicios/componenetes/agregar-favorito.service';
import {OrderListaService} from './servicios/componenetes/order-lista.service';
import {NotificacionService} from './servicios/componenetes/notificacion.service';


import { MenuComponent } from './componente/pages/menu/menu.component';
import { AppComponent } from './app.component';
import { DetalleComponent } from './componente/pages/detalle/detalle.component';
import { FavoritosComponent } from './componente/pages/favoritos/favoritos.component';
import { BusquedaPipe } from './pipes/busqueda.pipe';
import { IdiomaPipe } from './pipes/idioma.pipe';
import { LoginComponent } from './componente/pages/login/login.component';
import { LogUpComponent } from './componente/pages/log-up/log-up.component';
import { CardPeliculaComponent } from './componente/pages/decoradores/card-pelicula/card-pelicula.component';
import { ListaPeliculaComponent } from './componente/pages/Logicos/lista-pelicula/lista-pelicula.component';
import { BuscarPeliculaComponent } from './componente/pages/decoradores/buscar-pelicula/buscar-pelicula.component';
import { LoadingComponent } from './componente/pages/decoradores/loading/loading.component';
import { Pagina404Component } from './componente/pages/decoradores/pagina404/pagina404.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DetalleComponent,
    FavoritosComponent,
    BusquedaPipe,
    IdiomaPipe,
    LoginComponent,
    LogUpComponent,
    CardPeliculaComponent,
    ListaPeliculaComponent,
    BuscarPeliculaComponent,
    LoadingComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatSliderModule,
    MatDividerModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ReactiveFormsModule, // required animations module

    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    AngularFireModule.initializeApp(environment.firebase),


    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
        }
    })

  ],
  providers: [ConfigService,
    HttpService,
    ImagenesService,
    AgregarFavoritoService,
    OrderListaService,
    LoginService,
    TokenService,
    NotificacionService
    //AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
