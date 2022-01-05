import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JogosService } from '../services/jogos.service';

@Component({
  selector: 'app-jogos-registro',
  templateUrl: './jogos-registro.component.html',
  styleUrls: ['./jogos-registro.component.css']
})
export class JogosRegistroComponent implements OnInit {
  jogoForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    descricao: new FormControl(''), // colocar required
    ano: new FormControl(''), // required, number, min 1954
    autores: new FormControl([]), // required
    generos: new FormControl([]), // required
    capas: new FormControl([]) // nenhum
  })

  constructor(
    private jogoService: JogosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.jogoService.registrar(this.jogoForm.value).subscribe(data => this.router.navigateByUrl('/'));
  }

}
