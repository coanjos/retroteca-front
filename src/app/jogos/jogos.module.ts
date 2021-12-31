import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { JogosRoutingModule } from './jogos-routing.module';
import { JogosListaComponent } from './jogos-lista/jogos-lista.component';
import { JogosListaItemComponent } from './jogos-lista-item/jogos-lista-item.component';
import { JogosDetalheComponent } from './jogos-detalhe/jogos-detalhe.component';


@NgModule({
  declarations: [JogosListaComponent, JogosListaItemComponent, JogosDetalheComponent],
  imports: [
    CommonModule,
    JogosRoutingModule,
    HttpClientModule
  ]
})
export class JogosModule { }
