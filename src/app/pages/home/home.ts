// src/app/pages/home/home.ts

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // <-- 1. Importe o Router E o RouterLink
import { CommonModule } from '@angular/common'; // <-- 2. Importe o CommonModule

@Component({
  selector: 'app-home',
  standalone: true, // <----------------- 3. PRECISA ter standalone: true
  imports: [
    CommonModule, // <------------------- 4. Adicione para (click) e *ngFor funcionar
    RouterLink   // <-------------------- 5. Adicione para [routerLink] funcionar
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  irParaLogin() {
    this.router.navigate(['/login']);
  }
}
