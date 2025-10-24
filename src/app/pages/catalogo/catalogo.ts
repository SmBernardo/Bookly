import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../services/livro';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Livro } from '../../models/livro.model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
  imports: [CommonModule],
  styleUrls: ['./catalogo.css']
})
export class CatalogoComponent implements OnInit {
  listaDeLivros: Livro[] = [];

  constructor(
    private livroService: LivroService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // Busca todos os livros do serviço
    this.listaDeLivros = this.livroService.getLivros();
  }

  // Garante que o Angular aceite o estilo como seguro
  getSafeImageUrl(url: string): SafeStyle {
    const style = `url('${url}') center / cover`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
