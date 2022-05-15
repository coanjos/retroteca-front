import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { comentario } from '../interfaces/comentario';
import { ComentarioService } from '../services/comentario.service';

@Component({
  selector: 'app-comentarios-lista-item',
  templateUrl: './comentarios-lista-item.component.html',
  styleUrls: ['./comentarios-lista-item.component.css']
})
export class ComentariosListaItemComponent implements OnInit {
  @Input() comentario: comentario = {_id: '', texto: '', jogo: ''};
  @Output() apagarEvent = new EventEmitter<string>();
  
  constructor(private comentariosService: ComentarioService) { }

  ngOnInit(): void {
  }

  apagar(id: string) {
    this.apagarEvent.emit(id);
  }
}
