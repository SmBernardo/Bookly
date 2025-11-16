// src/app/services/usuario.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  // funcionalidade de cadastro
  cadastrarUsuario(novoUsuario: any): Observable<any> {

    return this.http.post<any>(this.apiUrl, novoUsuario);
  }
}
