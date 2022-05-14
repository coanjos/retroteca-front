import { Component, Input, OnInit } from '@angular/core';
import { comentario } from '../interfaces/comentario';

@Component({
  selector: 'app-comentarios-lista-item',
  templateUrl: './comentarios-lista-item.component.html',
  styleUrls: ['./comentarios-lista-item.component.css']
})
export class ComentariosListaItemComponent implements OnInit {
  @Input() comentario: comentario = {_id: '', texto: '', jogo: ''};
  constructor() { }

  ngOnInit(): void {
  }

}
