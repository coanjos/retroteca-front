import { Component, OnInit } from '@angular/core';
import { jogo } from '../interfaces/jogo';
import { JogosService } from '../services/jogos.service';

@Component({
  selector: 'app-jogos-lista',
  templateUrl: './jogos-lista.component.html',
  styleUrls: ['./jogos-lista.component.css']
})
export class JogosListaComponent implements OnInit {
  jogos: jogo[] = [];

  constructor(private jogosService: JogosService) { }

  ngOnInit(): void {
    this.jogosService.listar().subscribe(listaJogos => this.jogos = listaJogos);
  }

  apagar(id: string): void {
    this.jogosService.apagar(id).subscribe(deletado => {
      this.jogos = this.jogos.filter(j => j._id !== id)
    })
  }

}
