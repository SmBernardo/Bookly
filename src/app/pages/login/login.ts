// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 1. Importe o Router
import { CommonModule } from '@angular/common'; // 2. Importe o CommonModule
import { RouterLink } from '@angular/router'; // 3. Importe o RouterLink

@Component({
  selector: 'app-login',
  standalone: true, // 4. Marque como standalone
  imports: [CommonModule, RouterLink], // 5. Adicione as importações
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  // --- Lógica do 'senha.js' ---
  public senhaVisivel: boolean = false;
  public tipoInputSenha: string = 'password';

  // 6. Injete o Router no construtor
  constructor(private router: Router) { }

  // 7. Crie a função para o botão de login
  fazerLogin() {
    console.log('Login clicado!');
    // Navega para a rota 'home', que definimos como '/'
    this.router.navigate(['/']);
  }

  // 8. Crie a função para mostrar/ocultar a senha
  toggleSenha() {
    this.senhaVisivel = !this.senhaVisivel;

    if (this.senhaVisivel) {
      this.tipoInputSenha = 'text';
    } else {
      this.tipoInputSenha = 'password';
    }
  }
}
