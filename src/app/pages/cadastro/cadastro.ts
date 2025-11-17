// src/app/pages/cadastro/cadastro.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { UsuarioService } from '../../services/usuario';

export const matchPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const senha = control.get('senha');
  const confirmarSenha = control.get('confirmarSenha');

  if (!senha || !confirmarSenha || senha.value === confirmarSenha.value) {
    return null;
  }
  return { 'passwordMismatch': true };
};

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css'],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ]
})
export class CadastroComponent {

  // --- Lógica do 'senha.js' ---
  public senhaVisivel: boolean = false;
  public tipoInputSenha: string = 'password';

  cadastroForm: FormGroup;

  // Injeta o Router no construtor
  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.cadastroForm = new FormGroup({
      // Adiciona validadores
      'nome': new FormControl('', Validators.required),
      'sobrenome': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'senha': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'confirmarSenha': new FormControl('', Validators.required),
      'termos': new FormControl(false, Validators.requiredTrue)
    },
    {
      validators: matchPasswordValidator
    });
  }

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
    const novoUsuario = this.cadastroForm.value;

    this.usuarioService.cadastrarUsuario(novoUsuario).subscribe(() => {
      console.log('Usuário cadastrado com sucesso via HTTP POST!');
      this.router.navigate(['/obrigado']);
    });
  }
}
