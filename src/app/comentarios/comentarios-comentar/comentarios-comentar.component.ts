import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentarioService } from '../services/comentario.service';

@Component({
  selector: 'app-comentarios-comentar',
  templateUrl: './comentarios-comentar.component.html',
  styleUrls: ['./comentarios-comentar.component.css']
})
export class ComentariosComentarComponent implements OnInit {
  id: string = '';

  comentarioForm = new FormGroup({
    texto: new FormControl('', [Validators.required])
  })

  constructor(
    private activatedRoute: ActivatedRoute,
    private comentariosService: ComentarioService
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id
  }

  onSubmit() {
    this.comentariosService.comentar(this.id, this.comentarioForm.value).subscribe(data => window.location.reload());
  }

}
