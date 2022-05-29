import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { jogo } from '../interfaces/jogo';
import { JogosService } from '../services/jogos.service';

@Component({
  selector: 'app-jogos-lista',
  templateUrl: './jogos-lista.component.html',
  styleUrls: ['./jogos-lista.component.css'],
})
export class JogosListaComponent implements OnInit {
  jogos: jogo[] = [];

  isLogado: boolean = false;

  constructor(
    private jogosService: JogosService,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.verificarLogin();

    this.jogosService
      .listar()
      .subscribe((listaJogos) => (this.jogos = listaJogos));
  }

  apagar(id: string): void {
    this.jogosService.apagar(id).subscribe(() => {
      this.jogos = this.jogos.filter((j) => j._id !== id);
    });
  }

  verificarLogin(): void {
    const auth = this.authService.currentUserValue;

    if(auth?.usuario) {
      this.isLogado = true;
    }
  }
}
