import { NgModule, Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from './componente/pages/menu/menu.component';
import { DetalleComponent } from './componente/pages/detalle/detalle.component';
import { FavoritosComponent } from './componente/pages/favoritos/favoritos.component';
import { LoginComponent } from './componente/pages/login/login.component';
import { LogUpComponent } from './componente/pages/log-up/log-up.component';
import { AuthGuard } from './guards/auth.guard'
import { ListaPeliculaComponent } from './componente/pages/Logicos/lista-pelicula/lista-pelicula.component';
import { Pagina404Component } from './componente/pages/decoradores/pagina404/pagina404.component';

const routes: Routes = [



  {path: "", component: MenuComponent,
    children: [
      {path: "listado",
       component: ListaPeliculaComponent,
      canActivate: [AuthGuard]},
      {path: "", component: ListaPeliculaComponent,
      canActivate: [AuthGuard]},
      {path: "detalle", component: DetalleComponent},
      {path: "favoritos", component: FavoritosComponent,
      canActivate: [AuthGuard]},
      {path: "login", component: LoginComponent},
      {path: "logup", component: LogUpComponent},
      {path: "**", component: Pagina404Component}

  ]},
  {path: "**", component: Pagina404Component},

];

@NgModule({
  declarations: [],
  imports: [

    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

