import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  registrar(usuario: usuario): Observable<usuario> {
    return this.httpClient.post<usuario>(`${environment.retrotecaApiUrl}/usuarios`, usuario);
  }
}
