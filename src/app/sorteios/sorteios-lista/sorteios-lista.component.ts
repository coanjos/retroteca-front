import { Component, OnInit } from '@angular/core';
import { sorteio } from '../interfaces/sorteio';
import { SorteiosService } from '../services/sorteios.service';

@Component({
  selector: 'app-sorteios-lista',
  templateUrl: './sorteios-lista.component.html',
  styleUrls: ['./sorteios-lista.component.css']
})
export class SorteiosListaComponent implements OnInit {

  constructor(private sorteiosService: SorteiosService) {}
  sorteios: sorteio[] = [];

  ngOnInit(): void {
    this.sorteiosService.listar().subscribe(listaJogos => {
      this.sorteios = listaJogos
    });
  }
}
