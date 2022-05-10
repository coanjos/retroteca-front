import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios-registro',
  templateUrl: './usuarios-registro.component.html',
  styleUrls: ['./usuarios-registro.component.css']
})
export class UsuariosRegistroComponent implements OnInit {
  usuarioForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required])
  })

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {    
    this.usuariosService.registrar(this.usuarioForm.value).subscribe(data => this.router.navigateByUrl('/'));
  }

}
