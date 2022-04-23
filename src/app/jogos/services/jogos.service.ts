import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jogo } from '../interfaces/jogo';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FilenameResponse } from '../interfaces/filename-response';

@Injectable({
  providedIn: 'root'
})
export class JogosService {
  
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<jogo[]> {
    return this.httpClient.get<jogo[]>(`${environment.retrotecaApiUrl}/jogos`);
  }

  get(id: string): Observable<jogo> {
    return this.httpClient.get<jogo>(`${environment.retrotecaApiUrl}/jogos/${id}`);
  }

  registrar(jogo: jogo): Observable<jogo> {
    return this.httpClient.post<jogo>(`${environment.retrotecaApiUrl}/jogos`, jogo);
  }

  apagar(id: string): Observable<jogo> {
    return this.httpClient.delete<jogo>(`${environment.retrotecaApiUrl}/jogos/${id}`)
  }

  atualizar(id: string, jogo: jogo): Observable<jogo>{
    return this.httpClient.patch<jogo>(`${environment.retrotecaApiUrl}/jogos/${id}`, jogo);
  }

  getCapa(capa: string): Observable<Blob> {
    return this.httpClient.get(`${environment.retrotecaApiUrl}/jogos/capas/${capa}`, { responseType: 'blob' });
  }

  uploadCapa(uploadData: FormData): Observable<FilenameResponse> {
    return this.httpClient.post<FilenameResponse>(`${environment.retrotecaApiUrl}/jogos/capas`, uploadData);    
  }
}
