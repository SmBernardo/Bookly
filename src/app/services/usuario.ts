// src/app/services/usuario.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // 1. "lista estática (Array)" para "mocking" (requisito do PDF)
  private usuariosCadastrados: any[] = [];

  constructor() { }

  // 2. "funcionalidade de cadastro... organizada em classe do tipo service" (requisito do PDF)
  cadastrarUsuario(novoUsuario: any): void {

    // Em um app real, você enviaria isso para uma API.
    // Aqui, estamos apenas simulando o armazenamento na lista.

    this.usuariosCadastrados.push(novoUsuario);

    console.log('--- NOVO USUÁRIO CADASTRADO (no Service) ---');
    console.log(novoUsuario);
    console.log('--- LISTA DE USUÁRIOS ATUAL ---');
    console.log(this.usuariosCadastrados);
  }
}
