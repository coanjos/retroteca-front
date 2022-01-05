import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { jogo } from '../interfaces/jogo';
@Component({
  selector: 'app-jogos-lista-item',
  templateUrl: './jogos-lista-item.component.html',
  styleUrls: ['./jogos-lista-item.component.css']
})
export class JogosListaItemComponent implements OnInit {
  @Input() jogo: jogo = { _id: '', titulo: '', descricao: '', ano: 0, capas: [], generos: [], autores: []};
  @Output() apagarEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  apagar(id: string) {
    this.apagarEvent.emit(id);
  }

}
