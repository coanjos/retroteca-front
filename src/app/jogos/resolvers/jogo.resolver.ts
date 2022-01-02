import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { jogo } from '../interfaces/jogo';
import { JogosService } from '../services/jogos.service';

@Injectable({
  providedIn: 'root'
})
export class JogoResolver implements Resolve<jogo> {
  constructor(private jogosService: JogosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<jogo> {
    const id = route.queryParams.id;
    return this.jogosService.get(id);
  }
}
