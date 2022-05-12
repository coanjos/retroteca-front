import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'jogos',
    loadChildren: () => import('./jogos/jogos.module').then(m => m.JogosModule)
  },
  {
    path: 'sorteios',
    loadChildren: () => import('./sorteios/sorteios.module').then(m => m.SorteiosModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
  },
  {
    path: 'comentarios',
    loadChildren: () => import('./comentarios/comentarios.module').then(m => m.ComentariosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
