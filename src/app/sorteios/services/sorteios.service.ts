import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jogo } from '../../../app/jogos/interfaces/jogo';
import { sorteio } from '../interfaces/sorteio';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SorteiosService {
  
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<sorteio[]> {
    return this.httpClient.get<sorteio[]>(`${environment.retrotecaApiUrl}/sorteio/historico`);
  }

  get(): Observable<sorteio> {
    return this.httpClient.get<sorteio>(`${environment.retrotecaApiUrl}/sorteio`);
  }

  sortear(): Observable<sorteio> {
    return this.httpClient.post<sorteio>(`${environment.retrotecaApiUrl}/sorteio`, null);
  }
}
