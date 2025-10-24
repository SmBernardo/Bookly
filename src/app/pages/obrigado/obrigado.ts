// src/app/pages/obrigado/obrigado.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 1. Importe o Router

@Component({
  selector: 'app-obrigado',
  templateUrl: './obrigado.html',
  styleUrls: ['./obrigado.css']
})
export class ObrigadoComponent {

  // 2. Injete o Router no construtor
  constructor(private router: Router) { }

  // 3. Crie a função para o botão "Continuar" (lógica do 'continuar.js')
  irParaLogin() {
    // O seu 'continuar.js' mandava para 'login.html',
    // então vamos navegar para a ROTA '/login'
    this.router.navigate(['/login']);
  }
}
