import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentariosRoutingModule } from './comentarios-routing.module';
import { ComentariosListaComponent } from './comentarios-lista/comentarios-lista.component';
import { ComentariosListaItemComponent } from './comentarios-lista-item/comentarios-lista-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ComentariosListaComponent, ComentariosListaItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComentariosRoutingModule,
  ],
  exports: [ComentariosListaComponent, ComentariosListaItemComponent]
})
export class ComentariosModule { }
