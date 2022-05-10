import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuariosRegistroComponent } from './usuarios-registro/usuarios-registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosLoginComponent } from './usuarios-login/usuarios-login.component';


@NgModule({
  declarations: [UsuariosListaComponent, UsuariosRegistroComponent, UsuariosLoginComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class UsuariosModule { }
