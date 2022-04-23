import { Component, Input, OnInit } from '@angular/core';
import { sorteio } from '../interfaces/sorteio';

@Component({
  selector: 'app-sorteios-lista-item',
  templateUrl: './sorteios-lista-item.component.html',
  styleUrls: ['./sorteios-lista-item.component.css']
})
export class SorteiosListaItemComponent implements OnInit {
  @Input() sorteio: sorteio = { _id: '', jogo: {_id: '',titulo: '', descricao: '', ano: 0, capa: '', generos: [], autores: []}, ativo: false, sorteadoEm: new Date};
  constructor() { }

  ngOnInit(): void {
  }

}
