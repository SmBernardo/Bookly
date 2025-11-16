// src/app/pages/cadastro/cadastro.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css'],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ]
})
export class CadastroComponent {

  public nome: string = '';
  public sobrenome: string = '';
  public email: string = '';
  public senha: string = '';

  // --- Lógica do 'senha.js' ---
  public senhaVisivel: boolean = false;
  public tipoInputSenha: string = 'password';

  // Injeta o Router no construtor
  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  // Cria a função para mostrar/ocultar a senha (lógica do 'senha.js')
  toggleSenha() {
    this.senhaVisivel = !this.senhaVisivel;

    if (this.senhaVisivel) {
      this.tipoInputSenha = 'text';
    } else {
      this.tipoInputSenha = 'password';
    }
  }

  // Cria a função para o botão "Criar Conta" (lógica do 'cadastrar.js')
  criarConta() {
    const novoUsuario = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      email: this.email,
      senha: this.senha
    };

    this.usuarioService.cadastrarUsuario(novoUsuario).subscribe(() => {
      // Só navega depois que o cadastro for concluído
      console.log('Usuário cadastrado com sucesso via HTTP POST!');
      this.router.navigate(['/obrigado']);
    });
  }
}
