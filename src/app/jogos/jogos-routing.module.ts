import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogosDetalheComponent } from './jogos-detalhe/jogos-detalhe.component';
import { JogosListaComponent } from './jogos-lista/jogos-lista.component';
import { JogosRegistroComponent } from './jogos-registro/jogos-registro.component';

const routes: Routes = [
  {
    path: '',
    component: JogosListaComponent
  },
  {
    path: 'detalhe',
    component: JogosDetalheComponent
  },
  {
    path: 'registro',
    component: JogosRegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogosRoutingModule { }
