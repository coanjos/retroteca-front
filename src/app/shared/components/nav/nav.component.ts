import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  currentUser!: Auth | null;
  logado: boolean = false;
  nome: string | undefined = '';

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x

      if (x?.usuario !== null && x?.usuario !== undefined) {
        this.logado = true;
        this.nome = x?.usuario.nome;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.currentUser = null;
    this.logado = false;
    this.router.navigate(['/auth/login']);
  }
}
