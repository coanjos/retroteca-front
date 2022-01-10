import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SorteiosListaComponent } from './sorteios-lista/sorteios-lista.component';
import { SorteiosSortearComponent } from './sorteios-sortear/sorteios-sortear.component';

const routes: Routes = [
  {
    path: 'historico',
    component: SorteiosListaComponent
  },
  {
    path: '',
    component: SorteiosSortearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SorteiosRoutingModule { }
