// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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

  // Injeta o Router no construtor
  constructor(private router: Router) { }

  // Cria a função para o botão de login
  fazerLogin() {
    //console.log('Login clicado!');
    this.router.navigate(['/']);
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
}
