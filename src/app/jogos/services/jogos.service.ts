import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jogo } from '../interfaces/jogo';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogosService {
  
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<jogo[]> {
    return this.httpClient.get<jogo[]>(`${environment.retrotecaApiUrl}/jogos`);
  }

  registrar(jogo: jogo): Observable<jogo> {
    return this.httpClient.post<jogo>(`${environment.retrotecaApiUrl}/jogos`, jogo);
  }

  apagar(id?: number): Observable<jogo> {
    return this.httpClient.delete<jogo>(`${environment.retrotecaApiUrl}/jogos/${id}`)
  }
}
