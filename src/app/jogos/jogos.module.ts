import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { JogosRoutingModule } from './jogos-routing.module';
import { JogosListaComponent } from './jogos-lista/jogos-lista.component';
import { JogosListaItemComponent } from './jogos-lista-item/jogos-lista-item.component';
import { JogosDetalheComponent } from './jogos-detalhe/jogos-detalhe.component';
import { JogosRegistroComponent } from './jogos-registro/jogos-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JogosEdicaoComponent } from './jogos-edicao/jogos-edicao.component';


@NgModule({
  declarations: [JogosListaComponent, JogosListaItemComponent, JogosDetalheComponent, JogosRegistroComponent, JogosEdicaoComponent],
  imports: [
    CommonModule,
    JogosRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [JogosListaItemComponent]
})
export class JogosModule { }
