import { Component, OnInit } from '@angular/core';
import { sorteio } from '../interfaces/sorteio';
import { SorteiosService } from '../services/sorteios.service';

@Component({
  selector: 'app-sorteios-sortear',
  templateUrl: './sorteios-sortear.component.html',
  styleUrls: ['./sorteios-sortear.component.css']
})
export class SorteiosSortearComponent implements OnInit {

  constructor(private sorteiosService: SorteiosService) { }
  sorteio: any

  ngOnInit(): void {
    this.sorteiosService.sortear().subscribe(sorteio => this.sorteio = sorteio)
  }

}
