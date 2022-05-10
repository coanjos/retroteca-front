import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuariosLoginComponent } from './usuarios-login/usuarios-login.component';
import { UsuariosRegistroComponent } from './usuarios-registro/usuarios-registro.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosListaComponent
  },
  {
    path: 'registro',
    component: UsuariosRegistroComponent
  },
  {
    path: 'login',
    component: UsuariosLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
