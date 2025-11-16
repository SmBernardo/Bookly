import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../services/livro';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Livro } from '../../models/livro.model';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
  imports: [CommonModule, RouterLink],
  styleUrls: ['./catalogo.css']
})
export class CatalogoComponent implements OnInit {

  listaDeLivros: Livro[] = [];

  constructor(
    private livroService: LivroService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Lê os parâmetros da URL
    this.route.queryParams.subscribe(params => {
      const termoBusca = params['q'];

      // Chamando o Subscribe
      this.livroService.getLivros(termoBusca).subscribe(livrosRetornados => {
        this.listaDeLivros = livrosRetornados;
      });
    });
  }

  // Garante que o Angular aceite o estilo como seguro
  getSafeImageUrl(url: string): SafeStyle {
    const style = `url('${url}') center / cover`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
