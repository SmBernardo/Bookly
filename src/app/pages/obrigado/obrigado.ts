// src/app/pages/obrigado/obrigado.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-obrigado',
  templateUrl: './obrigado.html',
  styleUrls: ['./obrigado.css']
})
export class ObrigadoComponent {

  // Injeta o Router no construtor
  constructor(private router: Router) { }

  irParaLogin() {
    this.router.navigate(['/login']);
  }
}
