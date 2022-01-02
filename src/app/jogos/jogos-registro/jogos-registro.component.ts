import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { JogosService } from '../services/jogos.service';

@Component({
  selector: 'app-jogos-registro',
  templateUrl: './jogos-registro.component.html',
  styleUrls: ['./jogos-registro.component.css']
})
export class JogosRegistroComponent implements OnInit {
  jogoForm = new FormGroup({
    titulo: new FormControl(''),
    descricao: new FormControl(''),
    ano: new FormControl(''),
    autores: new FormControl([]),
    generos: new FormControl([]),
    capas: new FormControl([])
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
