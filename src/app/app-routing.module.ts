import { NgModule, Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from './componente/pages/menu/menu.component';
import { ListadoComponent } from './componente/pages/listado/listado.component';
import { DetalleComponent } from './componente/pages/detalle/detalle.component';

const routes: Routes = [

  {path: "", component: MenuComponent,
    children: [
      {path: "listado", component: ListadoComponent},
      {path: "detalle", component: DetalleComponent}

  ]}
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

