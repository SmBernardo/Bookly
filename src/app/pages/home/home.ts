// src/app/pages/home/home.ts

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  irParaLogin() {
    this.router.navigate(['/login']);
  }

  buscar(termo: string): void {
    // Navega para a página /catalogo e passa o termo da busca
    // como um "parâmetro de consulta" (query parameter)
    this.router.navigate(['/catalogo'], { queryParams: { q: termo } });
  }
}
