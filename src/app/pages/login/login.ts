// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  // --- Lógica do 'senha.js' ---
  public senhaVisivel: boolean = false;
  public tipoInputSenha: string = 'password';

  loginForm: FormGroup;

  constructor(
    private router: Router
  ) {

    this.loginForm = new FormGroup({
      // Adiciona validadores
      'nome': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'senha': new FormControl('', Validators.required)
    });
  }

  // Cria a função para mostrar/ocultar a senha
  toggleSenha() {
    this.senhaVisivel = !this.senhaVisivel;

    if (this.senhaVisivel) {
      this.tipoInputSenha = 'text';
    } else {
      this.tipoInputSenha = 'password';
    }
  }

  fazerLogin() {
    const dadosLogin = this.loginForm.value;

    console.log('--- DADOS DO FORMULÁRIO DE LOGIN ---');
    console.log(dadosLogin);

    this.router.navigate(['/']);
  }
}
