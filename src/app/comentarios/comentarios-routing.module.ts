import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosListaComponent } from './comentarios-lista/comentarios-lista.component';

const routes: Routes = [
  {
    path: '',
    component: ComentariosListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComentariosRoutingModule { }
