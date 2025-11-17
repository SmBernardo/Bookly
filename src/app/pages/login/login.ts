// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario';

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
  public loginInvalido: boolean = false;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {

    this.loginForm = new FormGroup({
      // Adiciona validadores
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
    this.loginInvalido = false;
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    this.usuarioService.login(email).subscribe(usuariosEncontrados => {
      if (usuariosEncontrados.length > 0) {
        const usuario = usuariosEncontrados[0];

        if (usuario.senha === senha) {
          console.log('Login bem-sucedido!', usuario);
          this.router.navigate(['/']);
        } else {
          this.loginInvalido = true;
          console.log('Senha incorreta');
        }

      } else {
        this.loginInvalido = true;
        console.log('Usuário não encontrado');
      }
    });
  }
}
