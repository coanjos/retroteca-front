import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogosDetalheComponent } from './jogos-detalhe/jogos-detalhe.component';
import { JogosListaComponent } from './jogos-lista/jogos-lista.component';

const routes: Routes = [
  {
    path: '',
    component: JogosListaComponent
  },
  {
    path: 'detalhe',
    component: JogosDetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogosRoutingModule { }
