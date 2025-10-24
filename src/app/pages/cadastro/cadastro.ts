// src/app/pages/cadastro/cadastro.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 1. Importe o Router

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class CadastroComponent {

  // --- Lógica do 'senha.js' ---
  public senhaVisivel: boolean = false;
  public tipoInputSenha: string = 'password';

  // 2. Injete o Router no construtor
  constructor(private router: Router) { }

  // 3. Crie a função para mostrar/ocultar a senha (lógica do 'senha.js')
  toggleSenha() {
    this.senhaVisivel = !this.senhaVisivel;

    if (this.senhaVisivel) {
      this.tipoInputSenha = 'text';
    } else {
      this.tipoInputSenha = 'password';
    }
  }

  // 4. Crie a função para o botão "Criar Conta" (lógica do 'cadastrar.js')
  criarConta() {
    // No futuro, aqui você validará os campos

    // Navega para a rota '/obrigado'
    this.router.navigate(['/obrigado']);
  }
}
