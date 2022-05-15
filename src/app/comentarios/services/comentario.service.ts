import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { comentario } from '../interfaces/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private httpClient: HttpClient) { }

  getComentariosJogo(id: string): Observable<comentario[]> {
    return this.httpClient.get<comentario[]>(`${environment.retrotecaApiUrl}/comentarios/jogo/${id}`);
  }

  comentar(id: string, comentario: comentario): Observable<comentario> {
    comentario.jogo = id;
    
    return this.httpClient.post<comentario>(`${environment.retrotecaApiUrl}/comentarios`, comentario);
  }

  apagar(id: string): Observable<comentario> {
    return this.httpClient.delete<comentario>(`${environment.retrotecaApiUrl}/comentarios/${id}`)
  }
}
