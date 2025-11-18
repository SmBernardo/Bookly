import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  public carregando: boolean = true;

  constructor(
    private livroService: LivroService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const termoBusca = params['q'];

      this.livroService.getLivros(termoBusca).subscribe(livrosRetornados => {
        this.listaDeLivros = livrosRetornados;
        console.log("Livros encontrados:", livrosRetornados.length);
        console.log("Termo de busca usado:", termoBusca);
        this.carregarLivros(termoBusca);
      });
    });
  }

  private carregarLivros(termoBusca?: string): void {
      this.carregando = true;

      this.livroService.getLivros(termoBusca).subscribe({
          next: (livrosRetornados) => {
              this.listaDeLivros = livrosRetornados;
              this.carregando = false;
              this.cdRef.detectChanges();
              console.log(`Livros carregados: ${livrosRetornados.length}`);
          },
          error: (err) => {
              console.error('ERRO CRÍTICO ao buscar livros da API:', err);
              this.listaDeLivros = [];
              this.carregando = false;
          }
      });
  }

  // Garante que o Angular aceite o estilo como seguro
  getSafeImageUrl(url: string): SafeStyle {
    const style = `url('${url}') center / cover`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
