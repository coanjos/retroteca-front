import { HttpClient } from '@angular/common/http';
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
    descricao: new FormControl('', [Validators.required]),
    ano: new FormControl('', [Validators.required, Validators.min(1954)]), 
    autores: new FormControl([], [Validators.required]), 
    generos: new FormControl([], [Validators.required]), 
    capa: new FormControl('')
  })

  arquivoSelecionado!: File;

  constructor(
    private jogoService: JogosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {    
    this.jogoService.registrar(this.jogoForm.value).subscribe(data => this.router.navigateByUrl('/'));
  }

  onImagemMudada(event: Event) : void  {
    const input = event.target as HTMLInputElement;
    this.arquivoSelecionado = <File>input.files![0];

    this.onUploadImagem()
  }

  onUploadImagem() {
    const uploadData = new FormData();
    uploadData.append('capa', this.arquivoSelecionado, this.arquivoSelecionado.name);
    this.jogoService.uploadCapa(uploadData).subscribe(data => this.jogoForm.controls.capa.setValue(data.filename));
  }

}
