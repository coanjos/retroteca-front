import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentariosRoutingModule } from './comentarios-routing.module';
import { ComentariosListaComponent } from './comentarios-lista/comentarios-lista.component';
import { ComentariosListaItemComponent } from './comentarios-lista-item/comentarios-lista-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ComentariosComentarComponent } from './comentarios-comentar/comentarios-comentar.component';


@NgModule({
  declarations: [ComentariosListaComponent, ComentariosListaItemComponent, ComentariosComentarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComentariosRoutingModule,
  ],
  exports: [ComentariosListaComponent, ComentariosListaItemComponent, ComentariosComentarComponent]
})
export class ComentariosModule { }
