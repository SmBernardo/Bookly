// src/app/pages/home/home.ts

import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class HomeComponent implements OnInit {

  usuarioLogado: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('usuarioLogado')) {
      this.usuarioLogado = true;
    }
  }

  irParaLogin() {
    this.router.navigate(['/login']);
  }

  irParaPerfil() {
    this.router.navigate(['/perfil']);
  }

  buscar(termo: string): void {
    if (termo && termo.trim() !== '') {
      this.router.navigate(['/catalogo'], { queryParams: { q: termo } });
    } else {
      this.router.navigate(['/catalogo']);
    }
  }
}
