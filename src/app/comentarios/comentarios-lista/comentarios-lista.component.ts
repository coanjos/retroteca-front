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

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private comentariosService: ComentarioService
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id

    this.comentariosService.getComentariosJogo(this.id).subscribe(listaComentarios => this.comentarios = listaComentarios)
  }


}
