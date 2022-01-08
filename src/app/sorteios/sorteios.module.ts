import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SorteiosRoutingModule } from './sorteios-routing.module';
import { SorteiosListaComponent } from './sorteios-lista/sorteios-lista.component';
import { JogosModule } from '../jogos/jogos.module';
import { SorteiosListaItemComponent } from './sorteios-lista-item/sorteios-lista-item.component';

@NgModule({
  declarations: [SorteiosListaComponent, SorteiosListaItemComponent],
  imports: [
    CommonModule,
    SorteiosRoutingModule,
    HttpClientModule,
    JogosModule
  ]
})
export class SorteiosModule { }
