import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ActivatedRouteSnapshot  } from '@angular/router';
import { jogo } from 'src/app/jogos/interfaces/jogo';
import { comentario } from '../interfaces/comentario';
import { ComentarioService } from '../services/comentario.service';

@Component({
  selector: 'app-comentarios-lista',
  templateUrl: './comentarios-lista.component.html',
  styleUrls: ['./comentarios-lista.component.css']
})
export class ComentariosListaComponent implements OnInit {
  id: string = '';
  comentarios: comentario[] = [];

  comentarioForm = new FormGroup({
    texto: new FormControl('', [Validators.required])
  })

  constructor(
    private activatedRoute: ActivatedRoute,
    private comentariosService: ComentarioService
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id

    this.comentariosService.getComentariosJogo(this.id).subscribe(listaComentarios => this.comentarios = listaComentarios)
  }

  apagar(id: string): void {    
    this.comentariosService.apagar(id).subscribe(() => {
      this.comentarios = this.comentarios.filter(j => j._id !== id)
    })
  }

  onSubmit() {
    this.comentariosService.comentar(this.id, this.comentarioForm.value).subscribe(data => this.comentarios.push(data));
    this.comentarioForm.reset()
  }

}
