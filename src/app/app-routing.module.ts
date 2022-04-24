import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscanerComponent } from './administrador/escaner/escaner.component';
import { AgregarComponent } from './administrador/Producto/agregar/agregar.component';
import { EditarComponent } from './administrador/Producto/editar/editar.component';
import { ListarComponent } from './administrador/Producto/listar/listar.component';
import { HomeComponent } from './cliente/home/home.component';
import { RegistroComponent } from './cliente/registro/registro.component';

const routes: Routes = [
  //rutas administrador
  {path:"listar", component:ListarComponent},
  {path:"agregar", component:AgregarComponent},
  {path:"editar", component:EditarComponent},
  {path:"escaner",component:EscanerComponent},


  //rutas cliente
  {path:"home", component:HomeComponent},
  {path:"vistaregistros", component:RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
