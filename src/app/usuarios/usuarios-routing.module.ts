import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuariosRegistroComponent } from './usuarios-registro/usuarios-registro.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosListaComponent
  },
  {
    path: 'registro',
    component: UsuariosRegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
