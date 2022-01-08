import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SorteiosListaComponent } from './sorteios-lista/sorteios-lista.component';

const routes: Routes = [
  {
    path: 'historico',
    component: SorteiosListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SorteiosRoutingModule { }
