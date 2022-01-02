import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot  } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { JogosService } from '../services/jogos.service';
import { Observable } from 'rxjs';
import { jogo } from '../interfaces/jogo';

@Component({
  selector: 'app-jogos-edicao',
  templateUrl: './jogos-edicao.component.html',
  styleUrls: ['./jogos-edicao.component.css']
})
export class JogosEdicaoComponent implements OnInit {
  id: string = '';
  jogo: jogo = { titulo: '', ano: 0, _id: '', descricao: '', autores: [], generos: [], capas: [] };

  editaJogoForm = new FormGroup({
    titulo: new FormControl(''),
    descricao: new FormControl(''),
    ano: new FormControl(''),
    autores: new FormControl([]),
    generos: new FormControl([]),
    capas: new FormControl([])
  })

  constructor(
    private jogoService: JogosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id
    this.jogo = this.activatedRoute.snapshot.data.jogo;
    this.atualizaForm();
  }

  onSubmit(): void {
    this.jogoService.atualizar(this.id, this.editaJogoForm.value).subscribe(data => this.router.navigateByUrl('/'));    
  }

  getJogo(): void {
    this.jogoService.get(this.id).subscribe(jogo => { 
      this.jogo = jogo
      this.atualizaForm();
    });    
  }

  atualizaForm(): void {
    this.editaJogoForm.controls.titulo.setValue(this.jogo.titulo);
    this.editaJogoForm.controls.descricao.setValue(this.jogo.descricao);
    this.editaJogoForm.controls.ano.setValue(this.jogo.ano);
    this.editaJogoForm.controls.autores.setValue(this.jogo.autores);
    this.editaJogoForm.controls.generos.setValue(this.jogo.generos);
    this.editaJogoForm.controls.capas.setValue(this.jogo.capas);
  } 

}
