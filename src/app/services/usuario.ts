// src/app/services/usuario.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // lista estática (Array)" para "mocking
  private usuariosCadastrados: any[] = [];

  constructor() { }

  // funcionalidade de cadastro... organizada em classe do tipo service"
  cadastrarUsuario(novoUsuario: any): void {

    this.usuariosCadastrados.push(novoUsuario);

    console.log('--- NOVO USUÁRIO CADASTRADO (no Service) ---');
    console.log(novoUsuario);
    console.log('--- LISTA DE USUÁRIOS ATUAL ---');
    console.log(this.usuariosCadastrados);
  }
}
