import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios-login',
  templateUrl: './usuarios-login.component.html',
  styleUrls: ['./usuarios-login.component.css']
})
export class UsuariosLoginComponent implements OnInit {
  usuarioEditaForm = new FormGroup({
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
    console.log("form works !!!\n", this.usuarioEditaForm.value)
    // this.usuariosService.login(this.usuarioEditaForm.value).subscribe(data => this.router.navigateByUrl('/'));
  }

}
